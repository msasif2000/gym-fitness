
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
    const priceOptions = [
        {
            "id": "1",
            "option_name": "Basic Membership",
            "price": "$30",
            "features": [
                "Access to gym facilities",
                "Standard gym equipment",
                "Locker room access",
                "No commitment",
                "Unlimited gym hours"
            ]
        },
        {
            "id": "2",
            "option_name": "Premium Membership",
            "price": "$50",
            "features": [
                "Access to gym facilities",
                "Advanced gym equipment",
                "Personal trainer sessions (2/month)",
                "Locker room access",
                "Month-to-month commitment",
                "Nutritional guidance",
                "Access to group fitness classes"
            ]
        },
        {
            "id": "3",
            "option_name": "Family Membership",
            "price": "$90",
            "features": [
                "Access to gym facilities for two adults and two children",
                "Standard gym equipment",
                "Locker room access",
                "No commitment",
                "Discounts on child memberships",
                "Family fitness classes"
            ]
        },
        {
            "id": "4",
            "option_name": "Student Membership",
            "price": "$25",
            "features": [
                "Access to gym facilities",
                "Standard gym equipment",
                "Locker room access",
                "Valid student ID required",
                "No commitment",
                "Access to study area",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": "5",
            "option_name": "Senior Membership",
            "price": "$20",
            "features": [
                "Access to gym facilities",
                "Standard gym equipment",
                "Locker room access",
                "For customers aged 60+",
                "No commitment",
                "Senior fitness classes",
                "Health and wellness seminars"
            ]
        }
    ];

    return (
        <div className="md:container mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 m-4 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;