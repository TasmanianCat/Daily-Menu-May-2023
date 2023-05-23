import chickenSoupImg from '../../images/chicken-soup.jpg';

function ChickenSoup() {
    const chickenSoupOption = [
        {
            id: '01',
            category: 'lunch',
            name: 'Chicken soup',
            ingredient1: '1 whole chicken',
            ingredient2: '3 medium potatos',
            ingredient3: '2 medium carrots',
            ingredient4: '50 grams of butter',
            ingredient5: '1 tablespoon olive oil',
            ingredient6: '2 large onions',
            ingredient7: '2 tablespoons flour',
            ingredient8: 'chopped parsley',
            ingredient9: '1 bay leaf',
            ingredient10: '2 chicken eggs',
            ingredient11: '1 teaspoon of salt',
            cookingTime: '1 hour',
            numberOfPersons: 'six',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { chickenSoupImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={chickenSoupImg} alt='Chicken soup' />
            ))}

            {chickenSoupOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}, {ingredient8}, {ingredient9}, {ingredient10}, {ingredient11}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default ChickenSoup;