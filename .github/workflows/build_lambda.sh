zip build.zip payment_api.py
pip install -r requirements.txt --system --target='./dependencies/python'
cd ./dependencies
zip -r ../dependencies.zip ./*