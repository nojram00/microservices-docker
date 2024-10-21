FROM python:3.14.0a1-alpine3.19

WORKDIR /var/www/app
COPY . /var/www/app/

RUN pip install -r requirements.txt

CMD [ "flask", "run", "--host=0.0.0.0" ]