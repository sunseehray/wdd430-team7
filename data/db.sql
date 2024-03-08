-- Create the type account_type before the account table
CREATE TYPE public.account_type AS ENUM
    ('Admin', 'Seller', 'Buyer');

ALTER TYPE public.account_type
    OWNER TO default;

-- Add UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--Table structure for table `account`
CREATE TABLE public.account (
	account_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	account_firstname character varying NOT NULL,
    account_lastname character varying NOT NULL,
    account_email character varying NOT NULL,
    account_password character varying NOT NULL,
    account_type account_type NOT NULL DEFAULT 'Buyer'::account_type
);

--Table structure for table `category`
--Use INT instead of UUID since there will only be six categories
CREATE TABLE public.category (
	category_id INT GENERATED BY DEFAULT AS IDENTITY,
	category_name character varying NOT NULL,
    CONSTRAINT category_pk PRIMARY KEY (category_id)
);

-- Table structure for table `product`
CREATE TABLE IF NOT EXISTS public.product
(
	product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	product_title character varying NOT NULL,
	product_description TEXT NOT NULL,
	product_image character varying NOT NULL,
	product_thumbnail character varying NOT NULL,
	product_price numeric(9, 2) NOT NULL,
	category_id INT NOT NULL,
    artist_id UUID NOT NULL
);

-- Create relationship between `category` and `product` tables
ALTER TABLE IF EXISTS public.product
	ADD CONSTRAINT fk_category FOREIGN KEY (category_id)
	REFERENCES public.category (category_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- Create relationship between `account` and `product` tables
ALTER TABLE IF EXISTS public.product
	ADD CONSTRAINT fk_account FOREIGN KEY (artist_id)
	REFERENCES public.account (account_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- Data for table `category`
INSERT INTO public.category (category_name)
VALUES ('Artisanal'),
	('Textiles and Fabrics'),
	('Jewerly and Accessories'),
	('Home Decor and Furnishings'),
	('Personal Care'),
	('Stationary and Paper Goods');

-- data for accounts table
INSERT INTO public.account (
    account_id,
    account_firstname,
    account_lastname,
    account_email,
    account_password,
    account_type
)
VALUES (
    '538c6f54-a22a-49a3-8815-8938c2f58932',
    'Leonardo',
    'Da Vinci',
    'leodv@mail.com',
    '123456',
    'Seller'
);

-- data for products table
INSERT INTO public.product (
	product_title,
	product_description,
	product_image,
	product_thumbnail,
	product_price,
	category_id,
	artist_id
)
VALUES (
	'Monalisa',
	'This is the description',
	'/product/atahan-guc-P5NgM_xVnTQ-unsplash.jpg',
	'/product/atahan-guc-P5NgM_xVnTQ-unsplash-tn.jpg',
	1950000.03,
	1,
	'538c6f54-a22a-49a3-8815-8938c2f58932'
);

-- modify Monalisa hummer description
UPDATE 
  public.product 
SET 
  product_description = REPLACE(product_description, 'description', 'changed description') 
WHERE 
  product_title = 'Monalisa' AND artist_id='538c6f54-a22a-49a3-8815-8938c2f58932';