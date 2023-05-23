import cottageCheeseFrittersImg from '../../images/cottage-cheese-fritters.jpg';

function CottageCheesefritters() {
    const cottageCheeseFrittersOption = [
        {
            id: '01',
            category: 'dessert',
            name: 'Cottage cheese fritters',
            ingredient1: '300 grams of cottage cheese',
            ingredient2: '2-3 tablespoons of flour',
            ingredient3: '2 tablespoons of sugar',
            ingredient4: '1 chicken egg',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            cookingTime: '20 minutes',
            numberOfPersons: 'two',
            description: 'It is delicious and healthy! Serve warm with sour cream or jam.'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { cottageCheeseFrittersImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={cottageCheeseFrittersImg} alt='Cottage cheese fritters' />
            ))}

            {cottageCheeseFrittersOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default CottageCheesefritters;