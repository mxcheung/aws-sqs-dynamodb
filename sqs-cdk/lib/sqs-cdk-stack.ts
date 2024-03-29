import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambdaEventSources from 'aws-cdk-lib/aws-lambda-event-sources';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';
import { RemovalPolicy, Stack, StackProps, Duration } from 'aws-cdk-lib';


export class SqsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
     //define dynamodb table
    const table = new dynamodb.Table(this, id, {
      partitionKey: { name: "MessageId", type: dynamodb.AttributeType.STRING },
      removalPolicy: RemovalPolicy.DESTROY,
      tableName: "Message"
      }
    )


    // Create an SQS queue
    const queue = new sqs.Queue(this, 'Message', {
      visibilityTimeout: cdk.Duration.seconds(300),
    });


    // Create an API Gateway
    const api = new apigateway.RestApi(this, 'SqsApi', {
      restApiName: 'Sqs API',
    });
    
    // Create lambda function
    const lambdaFunction = new lambda.Function(this, 'YourLambdaFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'lambda_function.lambda_handler', // Assuming the Python file is named "main.py" and the function is named "lambda_handler"
      code: lambda.Code.fromAsset(path.join(__dirname, '/../lambda')),
      timeout: Duration.minutes(3),
      environment: {
        DYNAMODB_TABLE: 'Message'
      }
    });
    
            
    // Grant the Lambda function read/write permissions to the DynamoDB table
    table.grantReadWriteData(lambdaFunction)

    // Grant the Lambda function permissions to send messages to the SQS queue
    queue.grantSendMessages(lambdaFunction);    
    
    // Grant the Lambda function permissions to consume messages from the SQS queue
    queue.grantConsumeMessages(lambdaFunction);


    
    // Add an SQS Event Source from the SQS Queue to the Lambda Function
    const eventSource = new lambdaEventSources.SqsEventSource(queue);
    
    lambdaFunction.addEventSource(eventSource);
    
    // Create an integration for the Lambda function
    const lambdaIntegration = new apigateway.LambdaIntegration(lambdaFunction);


    // Create a resource and associate the Lambda integration with a default method (GET)
    const helloResource = api.root.addResource('sqs');
    helloResource.addMethod('GET', lambdaIntegration);
    
    
  }
}
