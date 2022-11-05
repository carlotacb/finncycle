FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt upgrade -y

ENV TZ Europe/Madrid

RUN apt install -y openjdk-17-jdk git gradle
RUN git clone https://github.com/carlotacb/finncycle.git


WORKDIR "finncycle/server/wolt22"

EXPOSE 8080

RUN ./gradlew clean build

CMD ["java","-jar","build/libs/wolt22-0.0.1-SNAPSHOT.jar"]
