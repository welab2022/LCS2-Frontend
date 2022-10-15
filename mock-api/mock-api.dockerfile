# base go image
FROM golang:1.19-alpine as builder

RUN mkdir /app 

COPY . /app

WORKDIR /app

RUN CGO_ENABLE=0 go build -o mockAPI .

RUN chmod +x /app/mockAPI

# build a tiny docker image
FROM alpine:latest

RUN mkdir /app

COPY --from=builder /app/mockAPI /app

CMD ["/app/mockAPI"]

