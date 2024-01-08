# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template


# sqs-cdk


```
 aws dynamodb batch-write-item --request-items file://items.json
```

# sqs-dynamodb
sqs-dynamodb

DynamoDB

Lambda

API Gateway

S3

X-Ray


[fortune-cookies](https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application)https://github.com/ACloudGuru/hands-on-aws-troubleshooting/tree/main/Building_and_Troubleshooting_a_Serverless_Web_Application

# step 1 - quickstart

```
git clone https://github.com/mxcheung/aws-sqs-dynamodb.git
cd /home/ec2-user/environment/aws-sqs-dynamodb/sqs-cdk
. ./install.sh

```

```
cd /home/ec2-user/environment/aws-sqs-dynamodb/sqs-cdk
 aws dynamodb batch-write-item --request-items file://items.json
```


```
mkdir sqs-cdk

cd sqs-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam
```

# step 2 - replace cdk code

replace cdk  code /lib/dynamodb-cdk-stack.ts

copy items.json

# step 3 - cdk bootstrap and more

```
cdk bootstrap

cdk synth

cdk deploy
```

# step 4 - load data to dynamodb

```
 aws dynamodb batch-write-item --request-items file://items.json
```

# step 4 - send message  to sqs

```
Unable to locate credentials. You can configure credentials by running "aws configure"
aws sqs send-message --queue-url https://sqs.us-east-1.amazonaws.com/879897919494/SqsCdkStack-Message251322C6-bWKhZTJ6oreC --message-body "Information about the largest city in Any Region." --delay-seconds 10
```


# step 5 - view cookies page via github pages
View the fortune cookies app here
Static html calls 
   * api gateway
   * aws lambda
   * aws dynamodb
   * 
https://mxcheung.github.io/


Source code for Static html is here
https://github.com/mxcheung/mxcheung.github.io
