## Backend (Rails) API 

This doc describes API between frontend (Angular) and backend (Rails).

# /users

GET /users

```
{
    [
    ]
    users: {
  afula: { title: "Afula", channel: "large1" },
  arad: { title: "Arad", channel: "large1" },
  beer-sheva: { title: "Beer Sheva" channel: "large2" },
  eilat: { title: "Eilat" channel: "large2" },
  naharia: { title: "Naharia", channel: "small1" },
  nazareth: { title: "Nazareth Illit", channel: "small1"},
  raanana: { title: "Raanana", channel: "small2" },
  rehovot: { title: "Rehovot", channel: "small2" },
    }
}
```

# /janus

PUT /janus/switch

{
  channel: "large1",
  user: "afula@kbb1.com"
}

```
Move preview to program
Move afula to preview

{}
```



