export interface EducationItem {
    degree: string;
    school: string;
    year: string;
    description: string;
}

export const educationData: EducationItem[] = [
    {
        degree: "Master's degree in Automation and Electrical Engineering",
        school: "Aalto University",
        year: "2019",
        description: "Major: Translational Engineering, Smart Buildings."
    },
    {
        degree: "Bachelor's degree in Electrical Engineering",
        school: "Aalto University",
        year: "2016",
        description: "Major: Automation, Minor: Computer Science."
    }
];
