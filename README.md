docker-compose up -d
ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i inventory.yml playbook.yml -u test --ask-pass --ask-become-pass     

пароль - password
