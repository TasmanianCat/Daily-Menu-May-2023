import cheeseNutsImg from '../../images/cheese-nuts.jpg';

function CheeseNuts() {
    const cheeseNutsOption = [
        {
            id: '01',
            category: 'dessert',
            name: 'Cheese and nuts',
            ingredient1: '70 grams of any cheese',
            ingredient2: '50-70 grams of roasted almonds',
            ingredient3: '50-70 grams of roasted cashews',
            ingredient4: '',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            cookingTime: '0 minutes',
            numberOfPersons: 'two',
            description: 'It is delicious and healthy! Just make two cups of coffee and that is it!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { cheeseNutsImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={cheeseNutsImg} alt='Fruit salad' />
            ))}

            {cheeseNutsOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default CheeseNuts;