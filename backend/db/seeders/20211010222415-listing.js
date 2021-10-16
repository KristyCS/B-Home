"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert(
      "Listings",
      [
        {
          host_id: 1,
          location_id: 1,
          name: "Sunny Bungalow in the City",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{TV,"Wireless Internet",Kitchen,"Free Parking on Premises","Pets live on this property",Dog(s),Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Fire Extinguisher",Essentials,Shampoo,"Laptop Friendly Workspace"}',
          price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 2,
          location_id: 2,
          name: "Private House in Roslindale/Boston/Arboretum",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 5,
          bathrooms: 1,
          beds: 3,
          amenities:'{TV,"Cable TV",Internet,"Wireless Internet","Air Conditioning",Kitchen,"Free Parking on Premises","Indoor Fireplace",Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Carbon Monoxide Detector","Fire Extinguisher",Essentials}',price: 100,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 3,
          location_id: 3,
          name: "Guest Room in Cozy Home",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{Internet,"Wireless Internet","Air Conditioning",Kitchen,"Free Parking on Premises","Pets live on this property",Cat(s),Heating,Washer,Dryer,"translation missing: en.hosting_amenity_49","translation missing: en.hosting_amenity_50"}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 4,
          location_id: 4,
          name: "Private 1 bedroom w/ kitchenette",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{Internet,"Wireless Internet","Air Conditioning",Kitchen,Breakfast,Heating,"Family/Kid Friendly"}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 5,
          location_id: 5,
          name: "Adorable  Apt. 20 min from Downtown",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{TV,Internet,"Wireless Internet","Air Conditioning",Kitchen,"Free Parking on Premises","Indoor Fireplace",Heating,"Smoke Detector","Carbon Monoxide Detector","First Aid Kit","Safety Card","Fire Extinguisher",Essentials,Shampoo,"24-Hour Check-in",Hangers,"Hair Dryer",Iron,"Laptop Friendly Workspace"}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 6,
          location_id: 6,
          name: "Bright Room Near Roslindale Village",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{"Family/Kid Friendly","translation missing: en.hosting_amenity_49"}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 7,
          location_id: 7,
          name: "Private Room near Public Transport",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{"Wireless Internet","Air Conditioning",Kitchen,Washer,Dryer,"Smoke Detector","Carbon Monoxide Detector","Fire Extinguisher",Essentials,"Lock on Bedroom Door",Hangers,"Laptop Friendly Workspace"}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 8,
          location_id: 8,
          name: "Cozy Room & Fresh Roasted Coffee",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{TV,Internet,"Wireless Internet",Kitchen,"Free Parking on Premises",Heating,"Smoke Detector","First Aid Kit",Essentials,Shampoo,Hangers,"Hair Dryer",Iron,"Laptop Friendly Workspace","translation missing: en.hosting_amenity_49","translation missing: en.hosting_amenity_50"}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 9,
          location_id: 9,
          name: "Perfect & Practical Boston Rental",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{TV,"Cable TV",Internet,"Wireless Internet","Air Conditioning",Kitchen,"Pets live on this property",Dog(s),Cat(s),Heating,Washer,Dryer,"Smoke Detector","Carbon Monoxide Detector","First Aid Kit","Fire Extinguisher",Essentials,Shampoo}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 10,
          location_id: 10,
          name: "Sunny Bungalow in the City",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{"Wireless Internet","Air Conditioning",Kitchen,"Free Parking on Premises","Pets Allowed","Pets live on this property","Indoor Fireplace",Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Carbon Monoxide Detector","First Aid Kit","Fire Extinguisher",Essentials,Shampoo,"24-Hour Check-in",Hangers,"Hair Dryer",Iron}',price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 5,
          location_id: 11,
          name: "Tranquility on Top of the Hill",
          summary: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{TV,"Wireless Internet",Kitchen,"Free Parking on Premises","Pets live on this property",Dog(s),Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Fire Extinguisher",Essentials,Shampoo,"Laptop Friendly Workspace"}',
          price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          host_id: 5,
          location_id: 12,
          name: "New Lrg Studio apt 15 min to Boston",
          summary: "Super comfy bedroom plus your own bathroom in our big, sunny condo. Roslindale is an outer neighborhood of Boston. For guests interested in downtown Boston, we are a 45-minute ride via public transportation. We're also just steps from the Arnold Arboretum, nature's gift to Boston. Driveway parking is available.",
          description: "Cozy, sunny, family home.  Master bedroom high ceilings. Deck, garden with hens, beehives & play structure.   Short walk to charming village with  attractive stores, groceries & local restaurants. Friendly neighborhood. Access public transportation. The house has an open and cozy feel at the same time.  The living room has a flat screen TV.  The kitchen has all you need for cooking.  We prefer you buy your food but can use the organic oils, herbs, etc.   The yard can be seen from sitting room and when the weather allows, the yard is a place children can lose themselves in a safe way.  We have 2 bee hives, 6 hens fenced in (sometimes they get out of their coop area & into the yard), 2 rabbits in a hutch and play structure. You will have access to 2 bedrooms, a living room, kitchen, bathrooms, and yard. Roslindale is quiet, convenient and friendly.  For Southern food try Redd's in Rozzie.  Italian Delfino's or Sophia's Grotto are great. Birch St Bistro has nice atmostphere--a little pric",
          transit: "The bus stop is 2 blocks away, and frequent. Bus is about a 10 minute ride to the Orange line, forest hills. The commuter rail into down town is a 6 minute walk from our home.  Walking is pleasant and restaurants, shops and grocery store are all a 6 minute walk away.",
          house_rules: "Clean up and treat the home the way you'd like your home to be treated.  No smoking.",
          property_type: "House",
          room_type: "Whole place",
          accommodates: 4,
          bathrooms: 2,
          beds: 2,
          amenities:'{TV,"Wireless Internet",Kitchen,"Free Parking on Premises","Pets live on this property",Dog(s),Heating,"Family/Kid Friendly",Washer,Dryer,"Smoke Detector","Fire Extinguisher",Essentials,Shampoo,"Laptop Friendly Workspace"}',
          price: 250,
          weekly_price: 1250,
          security_deposit: 200,
          cleaning_fee: 200,
          extra_people: 50,
          minimum_nights: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
