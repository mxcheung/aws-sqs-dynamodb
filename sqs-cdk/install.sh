#!/bin/bash
# Creates fortune cookies via cdk

echo "Welcome sqs dynamdb"

cd /home/ec2-user/environment/aws-sqs-dynamodb/sqs-cdk

cdk init app --language typescript

npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/core aws-sdk @aws-cdk/aws-iam


cdk bootstrap

cdk synth

cdk deploy
