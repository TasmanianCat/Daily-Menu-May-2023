import oatmealImg from '../../images/oatmeal.jpg';

function Oatmeal() {
    const oatmealOption = [
        {
            id: '01',
            category: 'breakfast',
            name: 'Oatmeal',
            ingredient1: '2 cups of oatmeal',
            ingredient2: '3 cups of milk',
            ingredient3: '2 cups of water',
            ingredient4: '50 grams of butter',
            cookingTime: '20 minutes',
            numberOfPersons: 'two',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { oatmealImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={oatmealImg} alt='Oatmeal' />
            ))}

            {oatmealOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default Oatmeal;