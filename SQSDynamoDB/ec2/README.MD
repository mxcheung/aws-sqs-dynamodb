# Configu new region

```
aws configure --region us-east-1
```


# Setup python3 and send message

```
sudo yum update
sudo yum install git
sudo yum install python3 -y
pip3 install boto3 ——user
git clone https://github.com/mxcheung/aws-sqs-dynamodb.git
cd /home/ec2-user/aws-sqs-dynamodb/SQSDynamoDB/ec2
. ./install.sh
```

```
python3 -m venv env
source ./env/bin/activate
pip install boto3
pip install faker
python3 send_message.py -q SqsCdkStack-Message251322C6-bWKhZTJ6oreC -i 0.1
```
