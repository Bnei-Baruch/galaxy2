def create_user(opts)
  username = opts[:username]
  User.find_or_create_by(username: username) do |u|
    password = "#{username}ARVUT2014"
    u.password = password
    u.password_confirmation = password
    u.email = opts[:email] || "#{username}@kbb1.com"
    u.role = opts[:role] || :user
    u.save!
  end
end

puts '--> Admins'
[{email: 'iwuvjhdva@gmail.com', username: 'negus'},
 {email: 'kolmanv@gmail.com', username: 'kolmanv'},
 {email: 'edoshor@gmail.com', username: 'edos'},
 {email: 'yosef.yudilevich@gmail.com', username: 'yosefy'},
 {email: 'amnonbb@gmail.com', username: 'amnon'},
].each {|x| create_user x.merge(role: :admin)}

puts '--> Shidur operators'
create_user username: 'shidur', role: :operator

puts '--> Users'
%w(
afula
arad
arava
ashdod
ashkelon
beer-sheva
broadcast
eilat
eilat1
galilgolan
hadera
haifa
jerusalem
karmiel
kfar-saba
kiriat-gat
mizpe
moscow
naharia
nazareth
netania
nizana
raanana
rehovot
revadim
rishon
tel-aviv
tveria
yokneam
zichron).each { |x| create_user(username: x)}

puts '--> Done'
