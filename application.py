from flask import Flask, render_template, request, send_from_directory,abort
import boto3
from werkzeug.utils import secure_filename

application = Flask(__name__)

s3 = boto3.client(service_name='s3',
                         aws_access_key_id="AKIAUMSI6JZIQSBRYIO5",
                         aws_secret_access_key="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")

BUCKET_NAME='file-upload-bucket-flask'

@application.route('/')
def home():
    return render_template("index.html")

application.config["CLIENT_IMAGES"] = "./assets/images/"

import os
@application.route("/get-image/<path:image_name>",methods=['GET', 'POST'])
def get_image(image_name):
    try:
        return send_from_directory( "static/assets/images/", image_name)
    except FileNotFoundError:
        print("failure")
        abort(404)

@application.route('/upload',methods=['post'])
def upload():
    if request.method == 'POST':
        img = request.files['file']
        if img:
                filename = secure_filename(img.filename)
                img.save(filename)
                s3.upload_file(
                    Bucket = BUCKET_NAME,
                    Filename=filename,
                    Key = filename
                )
                msg = "Upload Done ! "

    return render_template("index.html",msg =msg)

if __name__ == "__main__":
    application.static_folder = "static"
    application.run(host='127.0.0.1', port=5000, debug=True)
