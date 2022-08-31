FROM public.ecr.aws/lambda/nodejs:14

COPY ./* /var/task/

RUN npm ci --only=production

CMD [ "lambda.handler" ]