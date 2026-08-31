from flask import Flask, render_template, request, send_from_directory
import psycopg2
import os

app = Flask(__name__)
@app.route("/favicon.ico")
def favicon():
    return send_from_directory(
        app.static_folder,
        "favicon.svg",
        mimetype="image/svg+xml"
    )


def get_db_connection():
    return psycopg2.connect(os.environ.get("DATABASE_URL"))


def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            message TEXT NOT NULL
        )
    """)

    conn.commit()
    cursor.close()
    conn.close()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():
    name = request.form["name"]
    email = request.form["email"]
    phone = request.form["phone"]
    message = request.form["message"]

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO contacts (name, email, phone, message)
        VALUES (%s, %s, %s, %s)
    """, (name, email, phone, message))

    conn.commit()
    cursor.close()
    conn.close()

    return f"""
    <h1>Thank You, {name}!</h1>
    <p>Your enquiry has been received successfully.</p>
    <a href="/">Back to Home</a>
    """


init_db()


if __name__ == "__main__":
    app.run(debug=True)