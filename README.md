Personal project for controlling Raspberry Pi GPIO pins over LAN.
Basically a [Koa](https://github.com/koajs/koa) webserver paired with [Johnny-five](johnny-five.io) and [Raspi-io](github.com/nebrius/raspi-io).

API:
* `/api/buzz/input/:timeout`: Activates buzz pin for `:time` or the default 20 seconds.
* `/api/desk/raise`: Actives 'raise desk' pin
* `/api/desk/lower`: Activates 'lower desk' pin
