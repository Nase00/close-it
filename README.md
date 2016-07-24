*This project is in super early development*.

Lightweight Koa server to control a circuit over LAN. Example use: close circuit on apartment buzzer to open building gate remotely.

API:
* `/api/open`: Opens circuit
* `/api/close`: Closes circuit
* `/api/press/:time`: Opens circuit for specified amount of time (integer in milliseconds)
