/* eslint-disable react/prop-types */
const Preparing = ({ preparing }) => {
    const { recipe_name, preparing_time, calories } = preparing
    return (
        <div className='bg-[#28282808] p-4'>
            <table>
                <tbody>
                    <tr className='p-6 text-[#878787] font-medium font-fira leading-4'>
                        <td className='px-9'>{recipe_name}</td>
                        <td className='px-9'><span>{preparing_time} min</span></td>
                        <td className='px-9'><span>{calories}</span> calories</td>
                        <td className='px-12'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Preparing;