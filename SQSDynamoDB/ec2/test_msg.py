import json
import argparse
import logging
import sys
from time import sleep
import boto3


def lambda_handler(event, context):
    # TODO implement
    
    sqs = boto3.resource('sqs')
    
    queue = sqs.get_queue_by_name(QueueName="Messages")
    
    
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
