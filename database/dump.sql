--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	11	1	2999
2	12	1	2999
3	13	1	2999
4	14	1	2999
5	15	1	2999
6	16	1	2999
7	17	1	2999
8	18	1	2999
9	18	1	2999
10	18	1	2999
11	18	1	2999
12	19	3	2900
13	19	2	2595
14	19	1	2999
15	20	3	2900
16	20	3	2900
17	21	3	2900
18	21	1	2999
19	21	4	999
20	22	1	2999
21	22	3	2900
22	22	1	2999
55	23	2	2595
56	23	1	2999
57	24	1	2999
58	23	1	2999
59	23	2	2595
60	23	1	2999
61	23	1	2999
62	25	1	2999
63	26	3	2900
64	27	3	2900
65	28	1	2999
66	28	2	2595
67	28	5	9900
68	29	1	2999
69	30	1	2999
70	31	1	2999
71	31	2	2595
72	31	2	2595
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-07-24 16:16:42.727072-07
2	2020-07-24 16:17:13.756472-07
3	2020-07-24 16:37:59.663372-07
4	2020-07-24 16:38:19.760253-07
5	2020-07-24 16:38:38.514475-07
6	2020-07-24 16:38:53.874298-07
7	2020-07-24 16:39:26.92168-07
8	2020-07-24 16:39:39.539926-07
9	2020-07-24 16:39:53.043649-07
10	2020-07-24 16:41:45.35672-07
11	2020-07-24 16:47:32.29485-07
12	2020-07-24 16:48:23.906793-07
13	2020-07-24 16:49:44.999674-07
14	2020-07-24 16:50:06.812963-07
15	2020-07-24 16:52:31.142872-07
16	2020-07-24 16:56:35.150204-07
17	2020-07-24 16:58:08.81253-07
18	2020-07-24 16:58:25.541747-07
19	2020-07-24 19:15:25.386436-07
20	2020-07-25 17:24:29.44093-07
21	2020-07-25 21:06:50.709922-07
22	2020-07-26 21:03:35.710485-07
23	2020-08-18 16:18:20.301677-07
24	2020-08-18 16:23:53.34812-07
25	2020-08-18 16:49:03.275906-07
26	2020-08-18 16:53:07.149367-07
27	2020-08-18 16:56:26.466825-07
28	2020-08-18 19:53:10.574533-07
29	2020-08-18 20:36:22.745256-07
30	2020-08-18 20:38:35.457391-07
31	2020-08-23 18:35:46.892551-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	24	Jeff	123456	Delaware	2020-08-18 16:39:27.159517-07
2	24	Jeff	123456	Delaware	2020-08-18 16:42:17.767858-07
3	25	Jeff	123456	Delaware	2020-08-18 16:49:45.993708-07
4	26	Jeff	123456	Delaware	2020-08-18 16:53:31.027583-07
5	27	Jeff	123456	Delaware	2020-08-18 16:59:23.79729-07
8	23	Kevin Lenell	0	420 blaze it aveneu	2020-08-18 19:38:01.191432-07
9	28	Wee	12345	asjkl;df;a	2020-08-18 20:07:31.124756-07
10	29	Julius	123456	wawa\n	2020-08-18 20:38:13.201507-07
11	30	Kevin Lenell	0	Wooo	2020-08-18 20:38:46.947251-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
15	Paper Mâché Dream Balloon	3346	/images/papermache.jpg	A very chirpy and happy sounding album about a deranged serial killer.  Recorded on almost entirely acoustic instruments, you might not notice the haunting story at all.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
16	Nonagon Infinity	9999	/images/nonagon.png	A nine track long album designed to be looped infinitely.  Certainly Gizz's wildest and most energetic effort yet.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
17	Flying Microtonal Banana	3500	/images/microtonal.jpg	The boys created a microtonal guitar for this album.  Very haunting psychedelic sitar-esque sounds here.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
18	Murder of the Universe	5000	/images/murder.jpg	3 albums in one.  A side very fast and narration heavy.  B side reminiscent of Nonagon.  C side is a total meme.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
19	Sketches of Brunswick East	3720	/images/brunswick.jpg	A collaboration album with Mild High Club leads to a very groovy jazz fusion sound.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
20	Polygonwanaland	4000	/images/polygon.jpg	The most fun album name to say.  Also the most archetypically psychedelic album.  Like a bad trip with a good afterglow	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
21	Gumboot Soup	4408	images/gumboot.jpg	The second of the B side albums.  This one is much more varied and you can really hear which album's recording sesh a song came from.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
22	Fishing for Fishies	4156	images/fishies.png	A very pop-y sounding environmental jam protesting overfishing and plastics.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
10	Eyes Like the Sky	2599	/images/eyes.jpg	The boys decided that their EP and debut were to garage and didn't want to be put into a category.  This album is like a old western radio drama with evil guitars in the background.	Eyes Like the Sky;Year of Our Lord;The Raid;Drum Run;Evil Man;Fort Whipple;The God Mans Goat Lust;The Killing Ground;Dust in the Wind;Guns & Horses
11	Float Along - Fill Your Lungs	2379	/images/float.jpg	Seems like a kind of transition into Radiohead vibes that they quickly left.  Standout tracks are "Let Me Mend the Past" and "God is Calling Me Back Home"	Head On/Pill;I Am Not a Man Unless I Have a Woman;God Is Calling Me Back Home;30 Past 7;Let Me Mend the Past;Mystery Jack;Pop in My Step;Float Along – Fill Your Lungs
12	Oddments	2120	/images/oddments.jpg	The first 'B-side'.  A collection of songs that didn't make it to other albums.  Still mangages to maintain it's own identity of pop-y indie vibes	Alluda Majaka;Stressin';Vegemite;It's Got Old;Work This Time;ABABCD;Sleepwalker;Hot Wax;Crying;Pipe-Dream;Homeless Man in Adidas;Oddments
14	Quarters!	4040	/images/quarters.jpg	Four tracks, each 10:10 long.  Similar vibes to the latter half of mind-fuzz.  "God is in the Rhythm" is one of Gizz's best tracks	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
23	Infest the Rats Nest	6660	images/infest.jpg	Straight up thrash metal out of nowhere.  Tells the story of an environmental apocalypse and a group of astronauts trying to escape to the planet venus	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
9	12 Bar Bruise	2999	/images/bruise.jpg	King Gizzard and the Lizard Wizard's Debut album.  Very garage-y and harsh	Elbow;Muckracker;Nein;12 Bar Bruise;Garage Liddiard;Sam Cherry's Last Shot;High Hopes Low;Cut Throat Boogie;Bloody Ripper;Uh Oh, I Called Mum;Sea of Trees;Footy Footy
13	I'm in Your Mind Fuzz	3299	/images/mindfuzz.jpg	Considered the best entry album to get into Gizz.  Very wild opening with a mellow ending.  You get a taste of most of their more prominent vibes.	I'm in Your Mind;I'm Not in Your Mind;Cellophane;I'm in Your Mind Fuzz;Empty;Hot Water;Am I in Heaven?;Slow Jam 1;Satan Speeds Up;Her and I (Slow Jam 2)
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 72, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 31, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 11, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 23, true);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

