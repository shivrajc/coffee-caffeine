import { readable } from "svelte/store";

const data = readable(
    [
        {
          "chain": "Caffe Nero",
          "product": "Single-shot Espresso",
          "caffeine_mg": 45,
          "drink_size_ml": 30
        },
        {
          "chain": "Caffe Nero",
          "product": "Cappuccino",
          "caffeine_mg": 115,
          "drink_size_ml": 355
        },
        {
          "chain": "Costa",
          "product": "Single-shot Espresso",
          "caffeine_mg": 100,
          "drink_size_ml": 30
        },
        {
          "chain": "Costa",
          "product": "Cappuccino",
          "caffeine_mg": 325,
          "drink_size_ml": 362
        },
        {
          "chain": "Greggs",
          "product": "Single-shot Espresso",
          "caffeine_mg": 75,
          "drink_size_ml": 28
        },
        {
          "chain": "Greggs",
          "product": "Cappuccino",
          "caffeine_mg": 197,
          "drink_size_ml": 341
        },
        {
          "chain": "Greggs",
          "product": "Filter/Brewed Coffee",
          "caffeine_mg": 225,
          "drink_size_ml": 341
        },
        {
          "chain": "Pret",
          "product": "Single-shot Espresso",
          "caffeine_mg": 180,
          "drink_size_ml": 30
        },
        {
          "chain": "Pret",
          "product": "Cappuccino",
          "caffeine_mg": 180,
          "drink_size_ml": 350
        },
        {
          "chain": "Pret",
          "product": "Filter/Brewed Coffee",
          "caffeine_mg": 271,
          "drink_size_ml": 350
        },
        {
          "chain": "Starbucks",
          "product": "Single-shot Espresso",
          "caffeine_mg": 33,
          "drink_size_ml": 25
        },
        {
          "chain": "Starbucks",
          "product": "Cappuccino",
          "caffeine_mg": 66,
          "drink_size_ml": 350
        },
        {
          "chain": "Starbucks",
          "product": "Filter/Brewed Coffee",
          "caffeine_mg": 102,
          "drink_size_ml": 350
        }
    ]
);

export {data};