import cherryPieImg from '../../images/cherry-pie.jpg';

function CherryPie() {
    const cherryPieOption = [
        {
            id: '01',
            category: 'dessert',
            name: 'Cottage pie with cherry',
            ingredient1: '2 chicken eggs',
            ingredient2: '70 grams of sugar',
            ingredient3: '2 cups (approximately 250 grams) of flour',
            ingredient4: 'pinch of cinnamon powder',
            ingredient5: '1 teaspoon of baking soda',
            ingredient6: '100 grams of frozen cherry berries without seeds',
            ingredient7: '8 tablespoons of milk',
            ingredient8: '8 tablespoons of sunflower oil',
            ingredient9: '200 grams of cottage',
            cookingTime: '55 minutes',
            numberOfPersons: 'four',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { cherryPieImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={cherryPieImg} alt='Cottage cherry pie' />
            ))}

            {cherryPieOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}, {ingredient8}, {ingredient9}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default CherryPie;