const education = [
  {
    date: "( 2017 )",
    detail:
      "6 months training in MEAN and MERN stack web development in Infosys.",
  },
  {
    date: "( 2011-2015 )",
    detail:
      "B. Tech biotechnology, Vellore Institute of technology, Vellore, Tamil Nadu, India",
  },
  {
    date: "( 2007-2009 )",
    detail:
      "Higher Secondary, Jawahar Navodaya Vidyalaya, Allahabad, Uttar Pradesh, India",
  },
  {
    date: "( 2006-2007 )",
    detail:
      "Higher School, Jawahar Navodaya Vidyalaya, Ghazipur, Uttar Pradesh, India",
  },
];

const EducationItem = ({ date, detail }: { date: string; detail: string }) => (
  <>
    <h3 className="text-xs font-medium text-gray-600 leading-tight mt-2 mb-1">
      {date}
    </h3>
    <div className="pl-2">{detail}</div>
  </>
);

const Education = () => {
  return (
    <div className="">
      {education.map((item) => (
        <EducationItem date={item.date} detail={item.detail} />
      ))}
    </div>
  );
};

export default Education;
