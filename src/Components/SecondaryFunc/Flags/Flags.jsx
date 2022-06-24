import Select from 'react-select'
import "./Flags.scss"


const options = [
    {
        value: '+996', label: (<><div className='flags-options'> <img src="./img/flags/flagKyrgyzstan.svg" alt="flagKyrgyzstan" /> <span>+996</span> </div> </>),
    },
    { value: '+7',  label: (<><div className='flags-options'> <img src="./img/flags/Flag_of_Russia.svg" alt="Flag_of_Russia" /> <span>+7</span> </div> </>) },
    { value: '+81',  label: (<><div className='flags-options'> <img src="./img/flags/Flag_of_the_People's_Republic_of_China.svg" alt="Flag_of_Japan" /> <span>+86</span> </div> </>)}
]
const Flags = () => (
    <Select
        placeholder='+'
        classNamePrefix="flags-select"
        options={options} />
)
export default Flags