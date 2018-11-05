import os

from flask import Flask, request, render_template, send_from_directory



app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
@app.route("/")
def index():
    return render_template("loginpage.html")

@app.route("/s")
def load():
    return render_template("upload.html")

@app.route("/alter")
def alter():
    return render_template("index.html")

@app.route("/demo")
def login():
    return render_template("demo.html")


@app.route("/upload", methods=["POST"])
def upload():


    target = os.path.join(APP_ROOT, 'file/')
    print(target)
    if not os.path.isdir(target):
        os.mkdir(target)
    print(request.files.getlist("file"))
    for upload in request.files.getlist("file"):
        print(upload)

        filename = upload.filename

        destination = "/".join([target, filename])


        upload.save(destination)

    # return send_from_directory("images", filename, as_attachment=True)
    return render_template("complete.html", image_name=filename)

if __name__ == '__main__':
    app.run()