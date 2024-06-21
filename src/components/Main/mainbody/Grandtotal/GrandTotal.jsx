/* eslint-disable react/prop-types */


const GrandTotal = ({time,calories}) => {
    return (
        <div>
            <table>
                <tr className='p-6 text-[#878787] font-medium font-fira leading-4'>
                    <td className="px-16"></td>
                    <td className="px-16">Total Time = <br/>
                        <span>{time}</span> minutes</td>
                    <td>Total Calories = <br/>
                        <span>{calories}</span> calories</td>
                </tr>
            </table>
        </div>
    );
};

export default GrandTotal;