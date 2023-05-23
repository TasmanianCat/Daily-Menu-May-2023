
import bakedChickenImg from '../../images/baked-chicken.jpg';

function BakedChicken() {
    const bakedChickenOption = [
        {
            id: '01',
            category: 'dinner',
            name: 'Baked Chicken',
            ingredient1: '1 whole chicken',
            ingredient2: '1/2 teaspoons of garlic powder',
            ingredient3: '1 teaspoons of paprika',
            ingredient4: '1 teaspoon of ground black pepper',
            ingredient5: '1 teaspoon of chili powder',
            ingredient6: '1 teaspoon of salt',
            ingredient7: '1 tablespoon of olive oil',
            ingredient8: '',
            ingredient9: '',
            cookingTime: '55 minutes',
            numberOfPersons: 'four',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { bakedChickenImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={bakedChickenImg} alt='Baked chicken' />
            ))}

            {bakedChickenOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default BakedChicken;