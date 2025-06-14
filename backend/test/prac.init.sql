CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE USER admin WITH PASSWORD 'root' 

create database films with owner admin;

GRANT ALL PRIVILEGES ON DATABASE films TO admin; 

create table public.films (
    id          uuid default uuid_generate_v4() not null constraint "PK_697487ada088902377482c970d1" primary key,
    rating      double precision                not null,
    director    varchar                         not null,
    tags        text                            not null,
    image       varchar                         not null,
    cover       varchar                         not null,
    title       varchar                         not null,
    about       varchar                         not null,
    description varchar                         not null
);

create table public.schedules (
    id       uuid default uuid_generate_v4() not null constraint "PK_7e33fc2ea755a5765e3564e66dd" primary key,
    daytime  varchar                         not null,
    hall     integer                         not null,
    rows     integer                         not null,
    seats    integer                         not null,
    price    double precision                not null,
    taken    text                            not null,
    "filmId" uuid constraint "FK_1c2f5e637713a429f4854024a76" references public.films
);

alter table public.films owner to admin;
alter table public.schedules owner to admin;

INSERT INTO films("id","rating","director","tags","image","cover","title","about","description") VALUES('92b8a2a7-ab6b-4fa9-915b-d27945865e39',8.1,'Амелия Хьюз','Рекомендуемые','/bg6s.jpg','/bg6c.jpg','Сон в летний день','Фэнтези-фильм о группе друзей попавших в волшебный лес, где время остановилось.','Причудливый фэнтези-фильм, действие которого происходит в волшебном лесу, где время остановилось. Группа друзей натыкается на это заколдованное царство и поначалу проникается беззаботным духом обитателей, но потом друзьям приходится разойтись. А как встретиться снова, если нет ни времени, ни места встречи?');
INSERT INTO films("id","rating","director","tags","image","cover","title","about","description") VALUES('0354a762-8928-427f-81d7-1656f717f39c',9.5,'Оливер Беннет','Рекомендуемые','/bg4s.jpg','/bg4c.jpg','Парадокс Нексуса','Фильм об эксперименте по соединению человеческих умов. Исследует вопросы неприкосновенности частной жизни, идентичности и самой природы человеческого сознания','В фильме исследуются последствия новаторского эксперимента по соединению человеческих умов. По мере развития проекта участники сталкиваются с вопросами неприкосновенности частной жизни, идентичности и самой природы человеческого сознания.');
INSERT INTO films("id","rating","director","tags","image","cover","title","about","description") VALUES('5b70cb1a-61c9-47b1-b207-31f9e89087ff',8.9,'Лила Васкес','Рекомендуемые','/bg2s.jpg','/bg2c.jpg','Стражи Гримуара','Фэнтезийное приключение об истинном значении дружбы, мужества и силы знаний','Захватывающее фэнтезийное приключение, которое рассказывает о группе героев, которые должны защитить древний магический том от попадания в руки тёмного колдуна. История об истинном значении дружбы, мужества и силы знаний.');
INSERT INTO films("id","rating","director","tags","image","cover","title","about","description") VALUES('3bedbc5a-844b-40eb-9d77-83b104e0cf75',8.5,'Элиза Уиттакер','Рекомендуемые','/bg5s.jpg','/bg5c.jpg','Звёздное путешествие','Научно-фантастический фильм о команде астронавтов, исследующий темы жизнестойкости, надежды и силы человеческих связей','«Звёздное путешествие» — прекрасный научно-фантастический фильм о команде астронавтов, путешествующих по галактике в поисках нового дома для человечества. Помимо потрясающей работы оператора и специалистов по визуальным эффектам, можно отметить темы, исследуемые в фильме: жизнестойкости, надежды и силы человеческих связей.');
INSERT INTO films("id","rating","director","tags","image","cover","title","about","description") VALUES('51b4bc85-646d-47fc-b988-3e7051a9fe9e',9,'Харрисон Рид','Рекомендуемые','/bg3s.jpg','/bg3c.jpg','Недостижимая утопия','Провокационный фильм-антиутопия, исследующий темы свободы, контроля и цены совершенства.','Провокационный фильм-антиутопия режиссера Харрисона Рида. Действие фильма разворачивается в, казалось бы, идеальном обществе, и рассказывает о группе граждан, которые начинают подвергать сомнению систему. Фильм исследует темы свободы, контроля и цены совершенства.');
INSERT INTO films("id","rating","director","tags","image","cover","title","about","description") VALUES('0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',2.9,'Итан Райт','Документальный','/bg1s.jpg','/bg1c.jpg','Архитекторы общества','Документальный фильм, исследующий влияние искусственного интеллекта на общество и этические, философские и социальные последствия технологии.','Документальный фильм Итана Райта исследует влияние технологий на современное общество, уделяя особое внимание роли искусственного интеллекта в формировании нашего будущего. Фильм исследует этические, философские и социальные последствия гонки технологий ИИ и поднимает вопрос: какой мир мы создаём для будущих поколений.');

INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T10:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',0,'f2e429b0-685d-41f8-a8cd-1d8cb63b99ce',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T14:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',1,'5beec101-acbb-4158-adc6-d855716b44a8',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T16:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',2,'89ee32f3-8164-40a6-b237-f4d492450250',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T11:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',0,'d6a4ed9b-51d6-4df2-b66e-d75175deb373',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T15:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',1,'a8af36c3-65ee-4224-a77d-c9ebb790ba66',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T17:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',2,'0cf8b68c-fcf2-4c0a-97ba-45990231fa0e',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T12:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',0,'2519ca34-32b4-4a7f-971d-3bb585c6450b',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T16:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',1,'b105ad4b-ecd2-4556-abaf-9a95403dc01c',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T18:00:53+03:00','0e33c7f6-27a7-4aa0-8e61-65d7e5effecf',2,'02a9feb2-fc92-4386-a917-aa79e7f8fd7f',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T10:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',0,'9647fcf2-d0fa-4e69-ad90-2b23cff15449',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T14:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',1,'9f2db237-01d0-463e-a150-89f30bfc4250',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T16:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',2,'3d5f5d12-b4d8-44d3-a440-1b91616fda40',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T11:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',0,'7f59de0d-62b2-412f-9e0b-bf6e971c44e5',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T15:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',1,'65f4a65e-1bc1-4677-842b-10e9b317b287',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T17:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',2,'b3ba6b69-050e-498c-9cdb-92711d8e4180',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T12:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',0,'d87ee9ab-4d84-43bb-85d6-f71aced22f73',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T16:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',1,'eed1469f-c95e-428a-870d-13cbfe4ac2ac',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T18:00:53+03:00','51b4bc85-646d-47fc-b988-3e7051a9fe9e',2,'68437c84-6c35-4203-bff7-021d16042a6b',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T10:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',0,'351b437c-3430-4a35-b71d-b93b3d80274a',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T14:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',1,'2661b7e2-7654-4d17-aa5d-9da76e4fb563',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T16:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',2,'d155ff3f-d547-4e4d-a530-bfcdcb3efbd5',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T11:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',0,'baf5d315-f3ad-4ebc-bbdc-544c51f3a2f3',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T15:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',1,'5a102896-b6ac-4db1-9f93-1653dde8a5f2',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T17:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',2,'c06b2048-a159-4356-b51b-3d7817766d02',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T12:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',0,'ee489a8b-68be-48a1-b62f-896981d60b06',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T16:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',1,'a33f5fda-c4d8-4a1b-9f86-cd39d73fdc98',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T18:00:53+03:00','3bedbc5a-844b-40eb-9d77-83b104e0cf75',2,'24074084-1d42-49ff-b0fb-e64029674718',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T10:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',0,'793009d6-030c-4dd4-8d13-9ba500724b38',350,5,10,'3:3,1:4,1:5,1:3,1:2');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T14:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',1,'27a6c145-d5bf-4722-8bd9-b58c5b6b718f',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T16:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',2,'1f57131e-eb9c-41a2-b451-89ea7f691fb7',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T11:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',0,'bfd27e0e-3a21-465c-966c-c874da242875',350,5,10,'2:2,2:3');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T15:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',1,'4ba7c6c6-33ba-4f1f-9a64-538d59d90c10',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T17:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',2,'e75cded8-ebad-4286-9e3e-b3e852916f8c',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T12:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',0,'516f87d0-8a36-4663-a079-1e9695b9a412',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T16:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',1,'3573d55b-9a7f-484b-a0e0-b204af6d86d0',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T18:00:53+03:00','5b70cb1a-61c9-47b1-b207-31f9e89087ff',2,'208ec902-8955-4a52-bdc3-a6ff04602ed9',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T10:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',0,'d3f54ca3-8e19-4b63-afd4-6a8d03933339',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T14:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',1,'2d794723-eadc-43ea-b82b-268f0178fb43',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T16:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',2,'043eb8fb-454a-40d2-9ce9-6fe80072bf8b',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T11:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',0,'aa366df5-f035-43ec-8088-87e042110f3d',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T15:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',1,'87b49000-5481-49d1-b481-b4f416f3e9bb',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T17:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',2,'9c1bd824-2330-4a8e-ab9d-6ac2180c9c5e',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T12:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',0,'20778761-4041-4a71-bf9f-0bfd63930ae8',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T16:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',1,'2aa2877b-9c15-4f56-8eea-936cfda5890a',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T18:00:53+03:00','0354a762-8928-427f-81d7-1656f717f39c',2,'53d4d8a0-d79f-4485-b4ce-ffc3a75540cb',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T10:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',0,'5274c89d-f39c-40f9-bea8-f22a22a50c8a',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T14:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',1,'3f7ed030-230c-4b06-bfc7-eeaee7f3f79b',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-28T16:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',2,'8e8c2627-4578-42b1-a59a-9ec4964a03e1',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T11:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',0,'940e657a-69fa-4f71-a48e-3c064dcb61fd',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T15:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',1,'ffde1149-dbc7-49b2-964d-a8de6a45709c',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-29T17:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',2,'6a0d0a68-2f74-4164-aac5-45e0e07adb86',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T12:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',0,'9d3d3914-ea59-46a0-80a2-4e320e82956a',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T16:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',1,'5c68663d-1a71-401c-9214-e79af571c347',350,5,10,'');
INSERT INTO schedules("daytime","filmId","hall","id","price","rows","seats","taken") VALUES('2024-06-30T18:00:53+03:00','92b8a2a7-ab6b-4fa9-915b-d27945865e39',2,'2644a72a-6f17-4c61-a405-9c48bb0ea682',350,5,10,'');