FROM ubuntu:24.04

RUN apt-get update \
    && apt-get install -y openssh-server


RUN apt-get install sudo \
    && mkdir /var/run/sshd \
    && echo "root:root" | chpasswd \
    && useradd -m -s /bin/bash test \
    && echo "test:password" | chpasswd \
    && echo "test ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/test \
    && chmod 0440 /etc/sudoers.d/test

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]