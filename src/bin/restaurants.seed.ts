import Restaurant from "@/models/Restaurant.model"
import restaurants from "./restaurants.json"
import { ModelAdaptedRestaurant } from "@/types/interfaces"
import "@/db"

const modelAdaptedRestaurants: ModelAdaptedRestaurant[] = restaurants.map(({ name, neighborhood, address, latlng: { lat, lng }, image, cuisine_type, operating_hours, reviews }) => {
    return (
        {
            name,
            neighborhood,
            address,
            location: {
                type: "Point",
                coordinates: [lat, lng]
            },
            image,
            cuisine_type,
            operating_hours,
            reviews
        }
    )
})

Restaurant
    .insertMany(modelAdaptedRestaurants)
    .then(restaurants => {
        console.log(`Successful DB Seed with restaurants ${restaurants}! ༼ つ ◕_◕ ༽つ`)
    })
    .catch(err => console.log(`DB Seed error: ${err}`))