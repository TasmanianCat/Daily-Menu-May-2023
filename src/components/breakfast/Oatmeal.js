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

    // Explanation of the recipe
    const instruction = [
        {
            id: '03',
            procedure: "Here's a step-by-step explanation on how to cook delicious oatmeal:",
            step1: "Step 1: ",
            li011: "- ",
            li012: "- ",
            step2: "Step 2: ",
            li021: "- ",
            li022: "- ",
            step3: "Step 3: ",
            li031: "- ",
            li032: "- ",
            step4: "Step 4: ",
            li041: "- ",
            li042: "- ",
            step5: "Step 5: ",
            li051: "- ",
            li052: "- ",
            step6: "Step 6: ",
            li061: "- ",
            li062: "- ",
            li063: "- ",
            li064: "- ",
            wishes: "Enjoy your oatmeal!"
        }
    ]
    // A function to show receipe
    const handleShowReceipe = () => {
        document.querySelector('.hidden').classList.toggle('show');
    }

    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={oatmealImg} alt='Oatmeal' />
            ))}

            {oatmealOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}

            <p className='show-hidden' onClick={handleShowReceipe}><strong><u>Show / Hide recipe</u></strong></p>

            <div className='hidden'>
                {instruction.map(({ id, procedure, step1, li011, li012, step2, li021, li022, step3, li031, li032, step4, li041, li042, step5, li051, li052, step6, li061, li062, li063, li064, wishes }) => (
                    <p key={id}>
                        <strong>
                            {procedure}
                        </strong><br />
                        <u className='step'>
                            {step1}
                        </u><br />
                        <em>
                            {li011}
                        </em><br />
                        <em>
                            {li012}
                        </em><br />
                        <u className='step'>
                            {step2}
                        </u><br />
                        <em>
                            {li021}
                        </em><br />
                        <em>
                            {li022}
                        </em><br />
                        <u className='step'>
                            {step3}
                        </u><br />
                        <em>
                            {li031}
                        </em><br />
                        <em>
                            {li032}
                        </em><br />
                        <u className='step'>
                            {step4}
                        </u><br />
                        <em>
                            {li041}
                        </em><br />
                        <em>
                            {li042}
                        </em><br />
                        <u className='step'>
                            {step5}
                        </u><br />
                        <em>
                            {li051}
                        </em><br />
                        <em>
                            {li052}
                        </em><br />
                        <u className='step'>
                            {step6}
                        </u><br />
                        <em>
                            {li061}
                        </em><br />
                        <em>
                            {li062}
                        </em><br />
                        <em>
                            {li063}
                        </em><br />
                        <em>
                            {li064}
                        </em><br />
                        {wishes}
                    </p>
                ))}
            </div>
        </div>
    );
}


export default Oatmeal;