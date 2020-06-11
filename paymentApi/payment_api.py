import json

import boto3

import stripe


def get_stripe_api_key():
    client = boto3.session.Session().client(
        service_name='secretsmanager',
        region_name='eu-west-1'
    )
    get_secret_value_response = client.get_secret_value(SecretId="stripeKeys")
    secrets = json.loads(get_secret_value_response['SecretString'])
    return secrets['TestSecretKey']

stripe.api_key = get_stripe_api_key()


def create_sample_intent():
    return stripe.PaymentIntent.create(
        amount=300,
        currency='eur',
        # Verify your integration in this guide by including this parameter
        metadata={'integration_check': 'accept_a_payment'},
    )


def handler(event, context):
    intent = create_sample_intent()
    return {
        "statusCode": 200,
        "body": json.dumps({'clientSecret': intent.client_secret})
    }
