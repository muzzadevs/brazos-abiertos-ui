const Credo = () => {
  return (
    <section id="credo" className="py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-iglesia-azul-profundo mb-8">
            Nuestro credo
          </h2>
        </div>
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2">
          {[
            "Creemos en un solo Dios, eterno y todopoderoso, Creador del cielo y de la tierra, que existe en tres personas: Padre, Hijo y Espíritu Santo.",
            "Creemos que Jesucristo es el Hijo de Dios, vivió sin pecado, murió en la cruz por nuestros pecados, resucitó al tercer día, ascendió al cielo y volverá con poder y gloria para establecer su Reino eterno.",
            "Creemos en el Espíritu Santo, quien habita en los creyentes, nos transforma, nos guía, y nos da poder para vivir conforme a la voluntad de Dios.",
            "Creemos en los dones del Espíritu, que siguen siendo vigentes hoy para edificación de la Iglesia.",
            "Creemos que la Biblia es la Palabra de Dios, viva y verdadera, inspirada por el Espíritu Santo. Es nuestra autoridad suprema en todo lo que creemos y hacemos.",
            "Creemos que todo ser humano necesita salvación, la cual es un regalo de Dios, recibida por gracia mediante la fe en Jesucristo. No se gana por obras, sino por la obra perfecta de Cristo en la cruz.",
            " Creemos en el bautismo en agua por inmersión, como testimonio público de nuestra fe en Cristo.",
            "Creemos en la Iglesia como el cuerpo de Cristo, formada por todos los creyentes nacidos de nuevo. Estamos llamados a amarnos, a servir juntos y a compartir el evangelio con el mundo.",
            "Creemos en la segunda venida de Cristo, en la resurrección de los muertos, en el juicio final, y en la vida eterna.",
            "Creemos que fuimos llamados a vivir en santidad, reflejando el carácter de Cristo en todo lo que hacemos, y que el fruto del Espíritu debe evidenciarse en nuestra vida diaria.",
          ].map((frase, i) => (
            <div
              key={i}
              className="bg-white/80 border border-iglesia-azul-claro rounded-xl shadow-lg p-6 md:p-8 text-left flex flex-col gap-2 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-iglesia-azul-medio font-bold text-lg md:text-xl">
                Creemos
              </span>{" "}
              <span className="text-gray-700 text-base md:text-lg">
                {frase.replace(/^Creemos/, "")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credo;
