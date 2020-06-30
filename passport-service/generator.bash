cd src

nest g module auth

nest g service auth


nest g module users

nest g service users


cd auth && touch local.strategy.ts constants.ts && cd ..


