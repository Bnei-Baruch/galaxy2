def create_user(opts)
  login = opts[:login]
  User.find_or_create_by(login: login) do |u|
    password = "#{login}ARVUT2014"
    u.password = password
    u.password_confirmation = password
    u.title = opts[:title]
    u.channel = opts[:channel]
    u.email = opts[:email] || "#{login}@kbb1.com"
    u.role = opts[:role] || :user
    u.save!
  end
end

puts '--> Admins'
[{email: 'iwuvjhdva@gmail.com', login: 'negus', title: 'Konstantin Alexandrov'},
 {email: 'kolmanv@gmail.com', login: 'kolmanv', title: 'Kolman Vornovitsky'},
 {email: 'edoshor@gmail.com', login: 'edos', title: 'Edo Shor'},
 {email: 'yosef.yudilevich@gmail.com', login: 'yosefy', title: 'Yosef Yudilevich'},
 {email: 'amnonbb@gmail.com', login: 'amnon', title: 'Amnon Israeli'},
].each {|x| create_user x.merge(role: :admin, channel: :hidden)}

puts '--> Shidur operators'
create_user login: 'shidur', role: :operator, title: 'Shidur', channel: 'hidden'

puts '--> Users'
%w(
afula|Afula|large1
arad|Arad|large1
arava|Arava|large1
ashdod|Ashdod|large1
ashkelon|Ashkelon|large1
beer-sheva|Beer\ Sheva|large1
eilat|Eilat|large1
eilat1|Eilat1|large1
galilgolan|Galil\ Golan|large2
hadera|Hadera|large2
haifa|Haifa|large2
jerusalem|Jerusalem|large2
karmiel|Karmiel|large2
kfar-saba|Kfar\ Saba|large2
kiriat-gat|Kiriat\ Gat|large2
mizpe|Mizpe\ Ramon|small1
moscow|Test|small1
naharia|Naharia|small1
nazareth|Nazareth\ Illit|small1
netania|Netanya|small1
nizana|Pithat\ Nitzana|small1
raanana|Raanana|small2
rehovot|Rehovot|small2
revadim|Revadim|small2
rishon|Rishon\ Lezion|small2
shidur|Shidur|small2
tel-aviv|Tel\ Aviv|small2
tveria|Tveria|small2
yokneam|Yokneam|small2
zichron|Zichron|small2).each {|x|
    login, title, channel = x.split('|')
    create_user(login: login, title: title, channel: channel)
}

puts '--> Done'
