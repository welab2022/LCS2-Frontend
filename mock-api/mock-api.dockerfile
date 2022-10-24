# base go image
FROM golang:1.19-alpine as builder

RUN mkdir -p /app 

COPY . /app

WORKDIR /app

# RUN go mod download
 
RUN env GOOS=linux CGO_ENABLE=0 go build -o MockAPI .

RUN chmod +x /app/MockAPI

# build a tiny docker image
FROM alpine:latest

RUN mkdir /app

WORKDIR /app

COPY --from=builder /app /app

CMD ["/app/MockAPI"]
