import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';


const LineChart = () => {
    const gymStudentData = [
        { id: 1, name: "Alice", body_strength: 85, muscle_strength: 78, foot_strength: 92 },
        { id: 2, name: "Bob", body_strength: 92, muscle_strength: 88, foot_strength: 75 },
        { id: 3, name: "Charlie", body_strength: 78, muscle_strength: 91, foot_strength: 84 },
        { id: 4, name: "David", body_strength: 88, muscle_strength: 82, foot_strength: 96 },
        { id: 5, name: "Eve", body_strength: 75, muscle_strength: 89, foot_strength: 82 },
        { id: 6, name: "Frank", body_strength: 96, muscle_strength: 75, foot_strength: 88 },
        { id: 7, name: "Grace", body_strength: 89, muscle_strength: 92, foot_strength: 91 },
        { id: 8, name: "Helen", body_strength: 84, muscle_strength: 78, foot_strength: 85 },
        { id: 9, name: "Ivy", body_strength: 91, muscle_strength: 96, foot_strength: 78 },
        { id: 10, name: "Jack", body_strength: 82, muscle_strength: 85, foot_strength: 89 },
        { id: 11, name: "Katie", body_strength: 90, muscle_strength: 85, foot_strength: 93 },
        { id: 12, name: "Leo", body_strength: 88, muscle_strength: 78, foot_strength: 87 },
        { id: 13, name: "Mia", body_strength: 79, muscle_strength: 92, foot_strength: 80 },
        { id: 14, name: "Noah", body_strength: 94, muscle_strength: 89, foot_strength: 91 },
        { id: 15, name: "Olivia", body_strength: 87, muscle_strength: 86, foot_strength: 83 },
        { id: 16, name: "Peter", body_strength: 81, muscle_strength: 95, foot_strength: 88 },
        { id: 17, name: "Quinn", body_strength: 83, muscle_strength: 90, foot_strength: 77 },
        { id: 18, name: "Ryan", body_strength: 76, muscle_strength: 81, foot_strength: 79 },
        { id: 19, name: "Soph", body_strength: 92, muscle_strength: 88, foot_strength: 90 },
        { id: 20, name: "Tyler", body_strength: 89, muscle_strength: 94, foot_strength: 82 }
    ];
    return (
        <div className='mt-12 md:container'>
            <div className='lg:w-[1000px] md:w-[600px] mx-auto'>
                <h2 className='text-3xl font-extrabold text-center my-6'>GYM Students Evaluation(Weekly Performance)</h2>
                <div className='flex justify-center'>
                    <LChart width={1100} height={500} data={gymStudentData}>
                        <XAxis dataKey={'name'} ></XAxis>
                        <YAxis ></YAxis>
                        <Tooltip></Tooltip>
                        <Line dataKey={'body_strength'} stroke='red'></Line>
                        <Line dataKey={'muscle_strength'} stroke='green'></Line>
                        <Line dataKey={'foot_strength'}></Line>
                    </LChart>

                </div>
            </div>
        </div>
    );
};

export default LineChart;