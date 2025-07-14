const Features = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Fast Setup', 'Fully Responsive', 'Easy Customization'].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel orci eu justo tincidunt.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
