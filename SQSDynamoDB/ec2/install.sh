#!/bin/bash
# Creates fortune cookies via cdk

python3 -m venv env
source ./env/bin/activate
pip install boto3
pip install faker
python3 send_message.py -q SqsCdkStack-Message251322C6-bWKhZTJ6oreC -i 0.1
