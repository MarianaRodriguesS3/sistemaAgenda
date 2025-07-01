import Agenda from './classes/Agenda.js';

export const sistema = new Agenda();

sistema.cadastrarUsuario('Joao', 'joao123', '123456789');
sistema.cadastrarUsuario('Maira', 'maira123', '123456789');

const usuJoao = sistema.buscarUsuario(0);
usuJoao.adicionarContato('Pedro', '(32)22222-2222', 'Av. dos Sonhos, 500', 'pedro@hotmail.com');
usuJoao.adicionarContato('Juliana', '(33)33333-3333', 'Praça da Liberdade, 800', 'juliana@yahoo.com');
usuJoao.adicionarContato('Rafael', '(34)44444-4444', 'Alameda das Águias, 200', 'rafael@outlook.com');
usuJoao.adicionarContato('Carla', '(35)55555-5555', 'Rua dos Girassóis, 50', 'carla@uol.com.br');
usuJoao.adicionarContato('Fernando', '(36)66666-6666', 'Av. das Palmeiras, 700', 'fernando@bol.com');
usuJoao.adicionarContato('Mariana', '(37)77777-7777', 'Travessa das Oliveiras, 300', 'mariana@terra.com');
usuJoao.adicionarContato('Rodrigo', '(38)88888-8888', 'Estrada do Sol, 150', 'rodrigo@globo.com');
usuJoao.adicionarContato('Patrícia', '(39)99999-9999', 'Rua das Margaridas, 250', 'patricia@ig.com.br');
usuJoao.adicionarContato('Lucas', '(40)10101-1010', 'Av. da Paz, 450', 'lucas@zap.com');
usuJoao.adicionarContato('Vanessa', '(41)20202-2020', 'Praça do Rock, 350', 'vanessa@msn.com');
usuJoao.adicionarContato('Gustavo', '(42)30303-3030', 'Alameda dos Pinheiros, 50', 'gustavo@live.com');
usuJoao.adicionarContato('Carolina', '(43)40404-4040', 'Rua das Rosas, 700', 'carolina@icloud.com');
usuJoao.adicionarContato('André', '(44)50505-5050', 'Av. das Árvores, 200', 'andre@me.com');
usuJoao.adicionarContato('Larissa', '(45)60606-6060', 'Travessa das Violetas, 300', 'larissa@net.com');
usuJoao.adicionarContato('Guilherme', '(46)70707-7070', 'Estrada do Rio, 150', 'guilherme@web.com');
usuJoao.adicionarContato('Renata', '(47)80808-8080', 'Rua dos Lírios, 250', 'renata@webmail.com');
usuJoao.adicionarContato('Felipe', '(48)90909-9090', 'Av. do Mar, 450', 'felipe@rocketmail.com');
usuJoao.adicionarContato('Isabela', '(49)01010-0101', 'Praça da Lua, 350', 'isabela@protonmail.com');
usuJoao.adicionarContato('Alexandre', '(50)11111-1111', 'Alameda dos Astros, 50', 'alexandre@fastmail.com');

const usuMaira = sistema.buscarUsuario(1);
usuMaira.adicionarContato('Patrícia', '(39)99999-9999', 'Rua das Margaridas, 250', 'patricia@ig.com.br');
usuMaira.adicionarContato('Lucas', '(40)10101-1010', 'Av. da Paz, 450', 'lucas@zap.com');
usuMaira.adicionarContato('Vanessa', '(41)20202-2020', 'Praça do Rock, 350', 'vanessa@msn.com');
usuMaira.adicionarContato('Gustavo', '(42)30303-3030', 'Alameda dos Pinheiros, 50', 'gustavo@live.com');
usuMaira.adicionarContato('Carolina', '(43)40404-4040', 'Rua das Rosas, 700', 'carolina@icloud.com');
usuMaira.adicionarContato('André', '(44)50505-5050', 'Av. das Árvores, 200', 'andre@me.com');
usuMaira.adicionarContato('Larissa', '(45)60606-6060', 'Travessa das Violetas, 300', 'larissa@net.com');
usuMaira.adicionarContato('Guilherme', '(46)70707-7070', 'Estrada do Rio, 150', 'guilherme@web.com');
usuMaira.adicionarContato('Renata', '(47)80808-8080', 'Rua dos Lírios, 250', 'renata@webmail.com');

