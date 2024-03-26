{{Short description|Theoretical framework}}
{{Quantum field theory}}

In [[theoretical physics]], '''quantum field theory''' ('''QFT''') is a theoretical framework that combines [[classical field theory]], [[special relativity]], and [[quantum mechanics]].<ref name="peskin">{{cite book |last1=Peskin |first1=M. |author-link=Michael Peskin |last2=Schroeder |first2=D.
 |year=1995
 |title=An Introduction to Quantum Field Theory
 |url=https://books.google.com/books?id=i35LALN0GosC
 |publisher=Westview Press
 |isbn=978-0-201-50397-5 }}</ref>{{rp|xi}} QFT is used in [[particle physics]] to construct [[physical model]]s of [[subatomic particle]]s and in [[condensed matter physics]] to construct models of [[quasiparticle]]s.

QFT treats particles as [[excited state]]s (also called [[Quantum|quantum]] levels) of their underlying quantum [[field (physics)|field]]s, which are more fundamental than the particles. The [[equation of motion]] of the particle is determined by minimization of the [[Action (physics)|action]] computed for the [[Lagrangian (field theory)|Lagrangian]], a functional of fields associated with the particle. Interactions between particles are described by interaction terms in the Lagrangian involving their corresponding quantum fields.  Each interaction can be visually represented by [[Feynman diagram]]s according to [[perturbation theory (quantum mechanics)|perturbation theory in quantum mechanics]].

{{Toclimit|3}}

==History==
{{Main|History of quantum field theory}}
Quantum field theory emerged from the work of generations of theoretical physicists spanning much of the 20th century. Its development began in the 1920s with the description of interactions between [[light]] and [[electrons]], culminating in the first quantum field theory—[[quantum electrodynamics]]. A major theoretical obstacle soon followed with the appearance and persistence of various infinities in perturbative calculations, a problem only resolved in the 1950s with the invention of the [[renormalization]] procedure. A second major barrier came with QFT's apparent inability to describe the [[weak interaction|weak]] and [[strong interaction]]s, to the point where some theorists called for the abandonment of the field theoretic approach. The development of [[gauge theory]] and the completion of the [[Standard Model]] in the 1970s led to a renaissance of quantum field theory.

===Theoretical background===
[[File:Magnet0873.png|thumb|200px|[[Magnetic field lines]] visualized using [[iron filings]]. When a piece of paper is sprinkled with iron filings and placed above a bar magnet, the filings align according to the direction of the magnetic field, forming arcs allowing viewers to clearly see the poles of the magnet and to see the magnetic field generated.]]

Quantum field theory results from the combination of [[classical field theory]], [[quantum mechanics]], and [[special relativity]].<ref name="peskin"/>{{rp|xi}} A brief overview of these theoretical precursors follows.

The earliest successful classical field theory is one that emerged from [[Newton's law of universal gravitation]], despite the complete absence of the concept of fields from his 1687 treatise ''[[Philosophiæ Naturalis Principia Mathematica]]''. The force of gravity as described by Newton is an "[[action at a distance]]"—its effects on faraway objects are instantaneous, no matter the distance. In an exchange of letters with [[Richard Bentley]], however, Newton stated that "it is inconceivable that inanimate brute matter should, without the mediation of something else which is not material, operate upon and affect other matter without mutual contact".<ref name=Hobson/>{{rp|4}} It was not until the 18th century that mathematical physicists discovered a convenient description of gravity based on fields—a numerical quantity (a [[vector (mathematics and physics)|vector]] in the case of [[gravitational field]]) assigned to every point in space indicating the action of gravity on any particle at that point. However, this was considered merely a mathematical trick.<ref name="weinberg">{{cite journal |last=Weinberg |first=Steven |author-link=Steven Weinberg |date=1977 |title=The Search for Unity: Notes for a History of Quantum Field Theory |journal=Daedalus |volume=106 |issue=4 |pages=17–35 |jstor=20024506 }}</ref>{{rp|18}}

Fields began to take on an existence of their own with the development of [[electromagnetism]] in the 19th century. [[Michael Faraday]] coined the English term "field" in 1845. He introduced fields as properties of space (even when it is devoid of matter) having physical effects. He argued against "action at a distance", and proposed that interactions between objects occur via space-filling "lines of force". This description of fields remains to this day.<ref name=Hobson>{{cite journal
 | last =Hobson
 | first =Art
 | title =There are no particles, there are only fields 
 | journal =[[American Journal of Physics]]
 | volume =81
 | issue =211
 | pages =211–223
 | year =2013
 | doi =10.1119/1.4789885
 | arxiv =1204.4616
 | bibcode =2013AmJPh..81..211H
 | s2cid =18254182
 }}</ref><ref name="Heilbron2003">{{cite book|author=John L. Heilbron|author-link=John L. Heilbron|title=The Oxford Companion to the History of Modern Science|date=14 February 2003|publisher=[[Oxford University Press]]|isbn=978-0-19-974376-6}}</ref>{{rp|301}}<ref name="Thomson1893">{{cite book|author=Joseph John Thomson|author-link=Joseph John Thomson|title=Notes on Recent Researches in Electricity and Magnetism: Intended as a Sequel to Professor Clerk-Maxwell's 'Treatise on Electricity and Magnetism'.|year=1893|publisher=Dawsons}}</ref>{{rp|2}}

The theory of [[classical electromagnetism]] was completed in 1864 with [[Maxwell's equation]]s, which described the relationship between the [[electric field]], the [[magnetic field]], [[electric current]], and [[electric charge]]. Maxwell's equations implied the existence of [[electromagnetic waves]], a phenomenon whereby electric and magnetic fields propagate from one spatial point to another at a finite speed, which turns out to be the [[speed of light]]. Action-at-a-distance was thus conclusively refuted.<ref name=Hobson/>{{rp|19}}

Despite the enormous success of classical electromagnetism, it was unable to account for the discrete lines in [[emission spectrum|atomic spectra]], nor for the distribution of [[blackbody radiation]] in different wavelengths.<ref name="weisskopf">{{cite journal |last=Weisskopf |first=Victor |author-link=Victor Weisskopf |date=November 1981 |title=The development of field theory in the last 50 years |journal=[[Physics Today]] |volume=34 |issue=11 |pages=69–85 |doi=10.1063/1.2914365 |bibcode=1981PhT....34k..69W }}</ref> [[Max Planck]]'s study of blackbody radiation marked the beginning of quantum mechanics. He treated atoms, which absorb and emit [[electromagnetic radiation]], as tiny [[oscillator]]s with the crucial property that their energies can only take on a series of discrete, rather than continuous, values. These are known as [[quantum harmonic oscillator]]s. This process of restricting energies to discrete values is called quantization.<ref name="Heisenberg1999">{{cite book|author=Werner Heisenberg|author-link=Werner Heisenberg|title=Physics and Philosophy: The Revolution in Modern Science| url=https://archive.org/details/PhysicsPhilosophy|year=1999|publisher=Prometheus Books|isbn=978-1-57392-694-2}}</ref>{{rp|Ch.2}} Building on this idea, [[Albert Einstein]] proposed in 1905 an explanation for the [[photoelectric effect]], that light is composed of individual packets of energy called [[photon]]s (the quanta of light). This implied that the electromagnetic radiation, while being waves in the classical electromagnetic field, also exists in the form of particles.<ref name="weisskopf" />

In 1913, [[Niels Bohr]] introduced the [[Bohr model]] of atomic structure, wherein [[electrons]] within atoms can only take on a series of discrete, rather than continuous, energies. This is another example of quantization. The Bohr model successfully explained the discrete nature of atomic spectral lines. In 1924, [[Louis de Broglie]] proposed the hypothesis of [[wave–particle duality]], that microscopic particles exhibit both wave-like and particle-like properties under different circumstances.<ref name="weisskopf" /> Uniting these scattered ideas, a coherent discipline, [[quantum mechanics]], was formulated between 1925 and 1926, with important contributions from [[Max Planck]], [[Louis de Broglie]], [[Werner Heisenberg]], [[Max Born]], [[Erwin Schrödinger]], [[Paul Dirac]], and [[Wolfgang Pauli]].{{r|weinberg|page1=22–23}}

In the same year as his paper on the photoelectric effect, Einstein published his theory of [[special relativity]], built on Maxwell's electromagnetism. New rules, called [[Lorentz transformations]], were given for the way time and space coordinates of an event change under changes in the observer's velocity, and the distinction between time and space was blurred.{{r|weinberg|page1=19}} It was proposed that all physical laws must be the same for observers at different velocities, i.e. that physical laws be invariant under Lorentz transformations.

Two difficulties remained. Observationally, the [[Schrödinger equation]] underlying quantum mechanics could explain the [[stimulated emission]] of radiation from atoms, where an electron emits a new photon under the action of an external electromagnetic field, but it was unable to explain [[spontaneous emission]], where an electron spontaneously decreases in energy and emits a photon even without the action of an external electromagnetic field. Theoretically, the Schrödinger equation could not describe photons and was inconsistent with the principles of special relativity—it treats time as an ordinary number while promoting spatial coordinates to [[linear operator]]s.<ref name="weisskopf" />

===Quantum electrodynamics===
Quantum field theory naturally began with the study of electromagnetic interactions, as the electromagnetic field was the only known classical field as of the 1920s.{{r|shifman|page1=1}}

Through the works of Born, Heisenberg, and [[Pascual Jordan]] in 1925–1926, a quantum theory of the free electromagnetic field (one with no interactions with matter) was developed via [[canonical quantization]] by treating the electromagnetic field as a set of [[quantum harmonic oscillator]]s.{{r|shifman|page1=1}} With the exclusion of interactions, however, such a theory was yet incapable of making quantitative predictions about the real world.{{r|weinberg|page1=22}}

In his seminal 1927 paper ''The quantum theory of the emission and absorption of radiation'', Dirac coined the term [[quantum electrodynamics]] (QED), a theory that adds upon the terms describing the free electromagnetic field an additional interaction term between electric [[current density]] and the [[electromagnetic four-potential|electromagnetic vector potential]]. Using first-order [[perturbation theory (quantum mechanics)|perturbation theory]], he successfully explained the phenomenon of spontaneous emission. According to the [[uncertainty principle]] in quantum mechanics, quantum harmonic oscillators cannot remain stationary, but they have a non-zero minimum energy and must always be oscillating, even in the lowest energy state (the [[ground state]]). Therefore, even in a perfect [[vacuum]], there remains an oscillating electromagnetic field having [[zero-point energy]]. It is this [[quantum fluctuation]] of electromagnetic fields in the vacuum that "stimulates" the spontaneous emission of radiation by electrons in atoms. Dirac's theory was hugely successful in explaining both the emission and absorption of radiation by atoms; by applying second-order perturbation theory, it was able to account for the [[scattering]] of photons, [[resonance fluorescence]] and non-relativistic [[Compton scattering]]. Nonetheless, the application of higher-order perturbation theory was plagued with problematic infinities in calculations.<ref name="weisskopf" />{{rp|71}}

In 1928, Dirac wrote down a [[wave equation]] that described relativistic electrons: the [[Dirac equation]]. It had the following important consequences: the [[Spin (physics)|spin]] of an electron is 1/2; the electron [[g-factor (physics)|''g''-factor]] is 2; it led to the correct Sommerfeld formula for the [[fine structure]] of the [[hydrogen atom]]; and it could be used to derive the [[Klein–Nishina formula]] for relativistic Compton scattering. Although the results were fruitful, the theory also apparently implied the existence of negative energy states, which would cause atoms to be unstable, since they could always decay to lower energy states by the emission of radiation.<ref name="weisskopf" />{{rp|71–72}}

The prevailing view at the time was that the world was composed of two very different ingredients: material particles (such as electrons) and [[Field (physics)#Quantum fields|quantum fields]] (such as photons). Material particles were considered to be eternal, with their physical state described by the probabilities of finding each particle in any given region of space or range of velocities. On the other hand, photons were considered merely the [[excited state]]s of the underlying quantized electromagnetic field, and could be freely created or destroyed. It was between 1928 and 1930 that Jordan, [[Eugene Wigner]], Heisenberg, Pauli, and [[Enrico Fermi]] discovered that material particles could also be seen as excited states of quantum fields. Just as photons are excited states of the quantized electromagnetic field, so each type of particle had its corresponding quantum field: an electron field, a proton field, etc. Given enough energy, it would now be possible to create material particles. Building on this idea, Fermi proposed in 1932 an explanation for [[beta decay]] known as [[Fermi's interaction]]. [[Atomic nucleus|Atomic nuclei]] do not contain electrons ''per se'', but in the process of decay, an electron is created out of the surrounding electron field, analogous to the photon created from the surrounding electromagnetic field in the radiative decay of an excited atom.{{r|weinberg|page1=22–23}}

It was realized in 1929 by Dirac and others that negative energy states implied by the Dirac equation could be removed by assuming the existence of particles with the same mass as electrons but opposite electric charge. This not only ensured the stability of atoms, but it was also the first proposal of the existence of [[antimatter]]. Indeed, the evidence for [[positron]]s was discovered in 1932 by [[Carl David Anderson]] in [[cosmic ray]]s. With enough energy, such as by absorbing a photon, an electron-positron pair could be created, a process called [[pair production]]; the reverse process, annihilation, could also occur with the emission of a photon. This showed that particle numbers need not be fixed during an interaction. Historically, however, positrons were at first thought of as "holes" in an infinite electron sea, rather than a new kind of particle, and this theory was referred to as the [[Dirac hole theory]].<ref name="weisskopf" />{{rp|72}}{{r|weinberg|page1=23}} QFT naturally incorporated antiparticles in its formalism.{{r|weinberg|page1=24}}

===Infinities and renormalization===
[[Robert Oppenheimer]] showed in 1930 that higher-order perturbative calculations in QED always resulted in infinite quantities, such as the electron [[self-energy]] and the vacuum zero-point energy of the electron and photon fields,<ref name="weisskopf" /> suggesting that the computational methods at the time could not properly deal with interactions involving photons with extremely high momenta.{{r|weinberg|page1=25}} It was not until 20 years later that a systematic approach to remove such infinities was developed.

A series of papers was published between 1934 and 1938 by [[Ernst Stueckelberg]] that established a relativistically invariant formulation of QFT. In 1947, Stueckelberg also independently developed a complete renormalization procedure. Such achievements were not understood and recognized by the theoretical community.<ref name="weisskopf" />

Faced with these infinities, [[John Archibald Wheeler]] and Heisenberg proposed, in 1937 and 1943 respectively, to supplant the problematic QFT with the so-called [[S-matrix theory]]. Since the specific details of microscopic interactions are inaccessible to observations, the theory should only attempt to describe the relationships between a small number of [[observable]]s (''e.g.'' the energy of an atom) in an interaction, rather than be concerned with the microscopic minutiae of the interaction. In 1945, [[Richard Feynman]] and Wheeler daringly suggested abandoning QFT altogether and proposed [[action-at-a-distance]] as the mechanism of particle interactions.{{r|weinberg|page1=26}}

In 1947, [[Willis Lamb]] and [[Robert Retherford]] measured the minute difference in the <sup>2</sup>''S''<sub>1/2</sub> and <sup>2</sup>''P''<sub>1/2</sub> energy levels of the hydrogen atom, also called the [[Lamb shift]]. By ignoring the contribution of photons whose energy exceeds the electron mass, [[Hans Bethe]] successfully estimated the numerical value of the Lamb shift.<ref name="weisskopf" />{{r|weinberg|page1=28}} Subsequently, [[Norman Myles Kroll]], Lamb, [[James Bruce French]], and [[Victor Weisskopf]] again confirmed this value using an approach in which infinities cancelled other infinities to result in finite quantities. However, this method was clumsy and unreliable and could not be generalized to other calculations.<ref name="weisskopf" />

The breakthrough eventually came around 1950 when a more robust method for eliminating infinities was developed by [[Julian Schwinger]], [[Richard Feynman]], [[Freeman Dyson]], and [[Shinichiro Tomonaga]]. The main idea is to replace the calculated values of mass and charge, infinite though they may be, by their finite measured values. This systematic computational procedure is known as [[renormalization]] and can be applied to arbitrary order in perturbation theory.<ref name="weisskopf" />  As Tomonaga said in his Nobel lecture:<blockquote>Since those parts of the modified mass and charge due to field reactions [become infinite], it is impossible to calculate them by the theory. However, the mass and charge observed in experiments are not the original mass and charge but the mass and charge as modified by field reactions, and they are finite. On the other hand, the mass and charge appearing in the theory are… the values modified by field reactions. Since this is so, and particularly since the theory is unable to calculate the modified mass and charge, we may adopt the procedure of substituting experimental values for them phenomenologically... This procedure is called the renormalization of mass and charge… After long, laborious calculations, less skillful than Schwinger's, we obtained a result... which was in agreement with [the] Americans'.<ref>{{cite journal |last1=Tomonaga |first1=Shinichiro |title=Development of Quantum Electrodynamics |url=https://www.nobelprize.org/prizes/physics/1965/tomonaga/lecture/ |journal=Science|year=1966 |volume=154 |issue=3751 |pages=864–868 |doi=10.1126/science.154.3751.864 |pmid=17744604 |bibcode=1966Sci...154..864T }}</ref></blockquote>

By applying the renormalization procedure, calculations were finally made to explain the electron's [[anomalous magnetic moment]] (the deviation of the electron [[g-factor (physics)|''g''-factor]] from 2) and [[vacuum polarization]]. These results agreed with experimental measurements to a remarkable degree, thus marking the end of a "war against infinities".<ref name="weisskopf" />

At the same time, Feynman introduced the [[path integral formulation]] of quantum mechanics and [[Feynman diagrams]].{{r|shifman|page1=2}} The latter can be used to visually and intuitively organize and to help compute terms in the perturbative expansion. Each diagram can be interpreted as paths of particles in an interaction, with each vertex and line having a corresponding mathematical expression, and the product of these expressions gives the [[scattering amplitude]] of the interaction represented by the diagram.{{r|peskin|page1=5}}

It was with the invention of the renormalization procedure and Feynman diagrams that QFT finally arose as a complete theoretical framework.{{r|shifman|page1=2}}

===Non-renormalizability===
Given the tremendous success of QED, many theorists believed, in the few years after 1949, that QFT could soon provide an understanding of all microscopic phenomena, not only the interactions between photons, electrons, and positrons. Contrary to this optimism, QFT entered yet another period of depression that lasted for almost two decades.{{r|weinberg|page1=30}}

The first obstacle was the limited applicability of the renormalization procedure. In perturbative calculations in QED, all infinite quantities could be eliminated by redefining a small (finite) number of physical quantities (namely the mass and charge of the electron). Dyson proved in 1949 that this is only possible for a small class of theories called "renormalizable theories", of which QED is an example. However, most theories, including the [[Fermi's interaction|Fermi theory]] of the [[weak interaction]], are "non-renormalizable". Any perturbative calculation in these theories beyond the first order would result in infinities that could not be removed by redefining a finite number of physical quantities.{{r|weinberg|page1=30}}

The second major problem stemmed from the limited validity of the Feynman diagram method, which is based on a series expansion in perturbation theory. In order for the series to converge and low-order calculations to be a good approximation, the [[coupling constant]], in which the series is expanded, must be a sufficiently small number. The coupling constant in QED is the [[fine-structure constant]] {{math|''α'' ≈ 1/137}}, which is small enough that only the simplest, lowest order, Feynman diagrams need to be considered in realistic calculations. In contrast, the coupling constant in the [[strong interaction]] is roughly of the order of one, making complicated, higher order, Feynman diagrams just as important as simple ones. There was thus no way of deriving reliable quantitative predictions for the strong interaction using perturbative QFT methods.{{r|weinberg|page1=31}}

With these difficulties looming, many theorists began to turn away from QFT. Some focused on [[symmetry (physics)|symmetry]] principles and [[conservation law]]s, while others picked up the old S-matrix theory of Wheeler and Heisenberg. QFT was used heuristically as guiding principles, but not as a basis for quantitative calculations.{{r|weinberg|page1=31}}

=== Source theory ===
Schwinger, however, took a different route. For more than a decade he and his students had been nearly the only exponents of field theory,<ref>{{cite book |last1=Mehra and Milton |title=Climbing the Mountain: The scientific biography of Julian Schwinger |date=2000 |publisher=Oxford University Press |page=454}}</ref> but in 1951<ref>{{Cite journal |last=Schwinger |first=Julian |date=July 1951 |title=On the Green's functions of quantized fields. I |journal=Proceedings of the National Academy of Sciences |language=en |volume=37 |issue=7 |pages=452–455 |doi=10.1073/pnas.37.7.452 |issn=0027-8424 |pmc=1063400 |pmid=16578383 |doi-access=free }}</ref><ref>{{Cite journal |last=Schwinger |first=Julian |date=July 1951 |title=On the Green's functions of quantized fields. II |journal=Proceedings of the National Academy of Sciences |language=en |volume=37 |issue=7 |pages=455–459 |doi=10.1073/pnas.37.7.455 |issn=0027-8424 |pmc=1063401 |pmid=16578384 |doi-access=free }}</ref> he found a way around the problem of the infinities with a new method using ''external sources'' as currents coupled to gauge fields.<ref>{{Cite journal |last=Schweber |first=Silvan S. |date=2005-05-31 |title=The sources of Schwinger's Green's functions |journal=Proceedings of the National Academy of Sciences |language=en |volume=102 |issue=22 |pages=7783–7788 |doi=10.1073/pnas.0405167101 |issn=0027-8424 |pmc=1142349 |pmid=15930139 |doi-access=free }}</ref> Motivated by the former findings, Schwinger kept pursuing this approach in order to "quantumly" generalize the [[Lagrangian mechanics#Lagrange multipliers and constraints|classical process]] of coupling external forces to the configuration space parameters known as Lagrange multipliers. He summarized his [[Source field|source theory]] in 1966<ref>{{cite journal |last1=Schwinger |first1=Julian |title=Particles and Sources |journal=Phys Rev |date=1966 |volume=152 |issue=4 |page=1219|doi=10.1103/PhysRev.152.1219 |bibcode=1966PhRv..152.1219S }}</ref> then expanded the theory's applications to quantum electrodynamics in his three volume-set titled: ''Particles, Sources, and Fields.''<ref name="Perseus Books" /><ref>{{Cite book |last=Schwinger |first=Julian |title=Particles, sources, and fields. 2 |date=1998 |publisher=Advanced Book Program, Perseus Books |isbn=978-0-7382-0054-5 |edition=1. print |location=Reading, Mass}}</ref><ref>{{Cite book |last=Schwinger |first=Julian |title=Particles, sources, and fields. 3 |date=1998 |publisher=Advanced Book Program, Perseus Books |isbn=978-0-7382-0055-2 |edition=1. print |location=Reading, Mass}}</ref> Developments in pion physics, in which the new viewpoint was most successfully applied, convinced him of the great advantages of mathematical simplicity and conceptual clarity that its use bestowed.<ref name="Perseus Books">{{cite book |last1=Schwinger |first1=Julian |title=Particles, Sources and Fields vol. 1 |date=1998 |publisher=Perseus Books |location=Reading, MA |isbn=0-7382-0053-0 |page=xi}}</ref>

In source theory there are no divergences, and no renormalization. It may be regarded as the calculational tool of field theory, but it is more general.<ref>{{cite book |editor=C.R. Hagen |display-editors=etal |title=Proc of the 1967 Int. Conference on Particles and Fields |date=1967 |publisher=Interscience |location=NY |page=128}}</ref>  Using source theory, Schwinger was able to calculate the anomalous magnetic moment of the electron, which he had done in 1947, but this time with no ‘distracting remarks’ about infinite quantities.<ref>{{cite book |last1=Mehra and Milton |title=Climbing the Mountain: The scientific biography of Julian Schwinger |date=2000 |publisher=Oxford University Press |page=467}}</ref>

Schwinger also applied source theory to his QFT theory of gravity, and was able to reproduce all four of Einstein's classic results: gravitational red shift, deflection and slowing of light by gravity, and the perihelion precession of Mercury.<ref>{{cite book |last1=Schwinger |first1=Julian |title=Particles, Sources and Fields vol. 1 |date=1998 |publisher=Perseus Bookks |location=Reading, MA |pages=82–85}}</ref>  The neglect of source theory by the physics community was a major disappointment for Schwinger:<blockquote>The lack of appreciation of these facts by others was depressing, but understandable.  -J. Schwinger<ref name="Perseus Books"/></blockquote>See "[[Julian Schwinger#Career|the shoes incident]]" between J. Schwinger and [[Steven Weinberg|S. Weinberg]].<ref>{{Cite book |last1=Mehra |first1=Jagdish |title=Climbing the mountain: the scientific biography of Julian Schwinger |last2=Milton |first2=Kimball A. |date=2005 |publisher=Oxford Univ. Press |isbn=978-0-19-852745-9 |edition=Reprinted |location=Oxford}}</ref>

===Standard-Model===
[[File:Standard Model of Elementary Particles.svg|thumb|300px|[[Elementary particles]] of the [[Standard Model]]: six types of [[quark]]s, six types of [[lepton]]s, four types of [[gauge boson]]s that carry [[fundamental interaction]]s, as well as the [[Higgs boson]], which endow elementary particles with mass.]]
In 1954, [[Yang Chen-Ning]] and [[Robert Mills (physicist)|Robert Mills]] generalized the [[gauge theory|local symmetry]] of QED, leading to [[Yang–Mills theory|non-Abelian gauge theories]] (also known as Yang–Mills theories), which are based on more complicated local [[symmetry group]]s.<ref name="thooft">{{Cite book |last='t Hooft |first=Gerard |author-link=Gerard 't Hooft |arxiv=1503.05007 |chapter=The Evolution of Quantum Field Theory |title=The Standard Theory of Particle Physics |volume=26 |pages=1–27 |date=2015-03-17 |bibcode=2016stpp.conf....1T |doi=10.1142/9789814733519_0001 |series=Advanced Series on Directions in High Energy Physics |isbn=978-981-4733-50-2 |s2cid=119198452 }}</ref>{{rp|5}} In QED, (electrically) charged particles interact via the exchange of photons, while in non-Abelian gauge theory, particles carrying a new type of "[[charge (physics)|charge]]" interact via the exchange of massless [[gauge boson]]s. Unlike photons, these gauge bosons themselves carry charge.{{r|weinberg|page1=32}}<ref>{{cite journal |last1=Yang |first1=C. N. |last2=Mills |first2=R. L. |author-link1=Chen-Ning Yang |author-link2=Robert Mills (physicist) |date=1954-10-01 |title=Conservation of Isotopic Spin and Isotopic Gauge Invariance |journal=[[Physical Review]] |volume=96 |issue=1 |pages=191–195 |doi=10.1103/PhysRev.96.191 |bibcode=1954PhRv...96..191Y |doi-access=free }}</ref>

[[Sheldon Glashow]] developed a non-Abelian gauge theory that unified the electromagnetic and weak interactions in 1960. In 1964, [[Abdus Salam]] and [[John Clive Ward]] arrived at the same theory through a different path. This theory, nevertheless, was non-renormalizable.<ref name="coleman">{{cite journal |last=Coleman |first=Sidney |author-link=Sidney Coleman |date=1979-12-14 |title=The 1979 Nobel Prize in Physics |journal=[[Science (journal)|Science]] |volume=206 |issue=4424 |pages=1290–1292 |jstor=1749117 |bibcode=1979Sci...206.1290C |doi=10.1126/science.206.4424.1290 |pmid=17799637 }}</ref>

[[Peter Higgs]], [[Robert Brout]], [[François Englert]], [[Gerald Guralnik]], [[C. R. Hagen|Carl Hagen]], and [[T. W. B. Kibble|Tom Kibble]] proposed in their famous [[1964 PRL symmetry breaking papers|''Physical Review Letters'' papers]] that the gauge symmetry in Yang–Mills theories could be broken by a mechanism called [[spontaneous symmetry breaking]], through which originally massless gauge bosons could acquire mass.{{r|thooft|page1=5–6}}

By combining the earlier theory of Glashow, Salam, and Ward with the idea of spontaneous symmetry breaking, [[Steven Weinberg]] wrote down in 1967 a theory describing [[electroweak interaction]]s between all [[lepton]]s and the effects of the [[Higgs boson]]. His theory was at first mostly ignored,<ref name="coleman" />{{r|thooft|page1=6}} until it was brought back to light in 1971 by [[Gerard 't Hooft]]'s proof that non-Abelian gauge theories are renormalizable. The electroweak theory of Weinberg and Salam was extended from leptons to [[quark]]s in 1970 by Glashow, [[John Iliopoulos]], and [[Luciano Maiani]], marking its completion.<ref name="coleman" />

[[Harald Fritzsch]], [[Murray Gell-Mann]], and [[Heinrich Leutwyler]] discovered in 1971 that certain phenomena involving the [[strong interaction]] could also be explained by non-Abelian gauge theory. [[Quantum chromodynamics]] (QCD) was born. In 1973, [[David Gross]], [[Frank Wilczek]], and [[Hugh David Politzer]] showed that non-Abelian gauge theories are "[[asymptotic freedom|asymptotically free]]", meaning that under renormalization, the coupling constant of the strong interaction decreases as the interaction energy increases. (Similar discoveries had been made numerous times previously, but they had been largely ignored.) {{r|thooft|page1=11}} Therefore, at least in high-energy interactions, the coupling constant in QCD becomes sufficiently small to warrant a perturbative series expansion, making quantitative predictions for the strong interaction possible.{{r|weinberg|page1=32}}

These theoretical breakthroughs brought about a renaissance in QFT. The full theory, which includes the electroweak theory and chromodynamics, is referred to today as the [[Standard Model]] of elementary particles.<ref>{{cite web |url=https://www.britannica.com/science/Standard-Model |title=Standard model |last=Sutton |first=Christine |author-link=Christine Sutton |website=britannica.com |publisher=[[Encyclopædia Britannica]] |access-date=2018-08-14}}</ref> The Standard Model successfully describes all [[fundamental interaction]]s except [[gravity]], and its many predictions have been met with remarkable experimental confirmation in subsequent decades.{{r|shifman|page1=3}} The [[Higgs boson]], central to the mechanism of spontaneous symmetry breaking, was finally detected in 2012 at [[CERN]], marking the complete verification of the existence of all constituents of the Standard Model.<ref>{{cite arXiv |last=Kibble |first=Tom W. B. |author-link=Tom Kibble |eprint=1412.4094 |title=The Standard Model of Particle Physics |class=physics.hist-ph |date=2014-12-12 }}</ref>

===Other developments===
The 1970s saw the development of non-perturbative methods in non-Abelian gauge theories. The [['t Hooft–Polyakov monopole]] was discovered theoretically by 't Hooft and [[Alexander Markovich Polyakov|Alexander Polyakov]], [[flux tube]]s by [[Holger Bech Nielsen]] and [[Poul Olesen]], and [[instanton]]s by Polyakov and coauthors. These objects are inaccessible through perturbation theory.{{r|shifman|page1=4}}

[[Supersymmetry]] also appeared in the same period. The first supersymmetric QFT in four dimensions was built by [[Yuri Golfand]] and [[Evgeny Likhtman]] in 1970, but their result failed to garner widespread interest due to the [[Iron Curtain]]. Supersymmetry only took off in the theoretical community after the work of [[Julius Wess]] and [[Bruno Zumino]] in 1973.{{r|shifman|page1=7}}

Among the four fundamental interactions, gravity remains the only one that lacks a consistent QFT description. Various attempts at a theory of [[quantum gravity]] led to the development of [[string theory]],{{r|shifman|page1=6}} itself a type of two-dimensional QFT with [[conformal symmetry]].<ref name="polchinski1" /> [[Joël Scherk]] and [[John Henry Schwarz|John Schwarz]] first proposed in 1974 that string theory could be ''the'' quantum theory of gravity.<ref>{{cite arXiv |last=Schwarz |first=John H. |author-link=John Henry Schwarz |eprint=1201.0981 |title=The Early History of String Theory and Supersymmetry |class=physics.hist-ph |date=2012-01-04 }}</ref>

===Condensed-matter-physics===
Although quantum field theory arose from the study of interactions between elementary particles, it has been successfully applied to other physical systems, particularly to [[many-body system]]s in [[condensed matter physics]].

Historically, the Higgs mechanism of spontaneous symmetry breaking was a result of [[Yoichiro Nambu]]'s application of [[superconductor]] theory to elementary particles, while the concept of renormalization came out of the study of second-order [[phase transition]]s in matter.<ref>{{cite web |url=https://science.energy.gov/~/media/hep/pdf/Reports/HEP-BES_Roundtable_Report.pdf |title=Common Problems in Condensed Matter and High Energy Physics |author=<!--Not stated--> |date=2015-02-02 |website=science.energy.gov |publisher=Office of Science, [[U.S. Department of Energy]] |access-date=2018-07-18}}</ref>

Soon after the introduction of photons, Einstein performed the quantization procedure on vibrations in a crystal, leading to the first [[quasiparticle]]—[[phonon]]s. Lev Landau claimed that low-energy excitations in many condensed matter systems could be described in terms of interactions between a set of quasiparticles. The Feynman diagram method of QFT was naturally well suited to the analysis of various phenomena in condensed matter systems.<ref name="wilczek">{{Cite journal |last=Wilczek |first=Frank |author-link=Frank Wilczek |arxiv=1604.05669 |title=Particle Physics and Condensed Matter: The Saga Continues |journal=Physica Scripta |volume=2016 |issue=T168 |pages=014003 |date=2016-04-19 |bibcode=2016PhST..168a4003W |doi=10.1088/0031-8949/T168/1/014003 |s2cid=118439678 }}</ref>

Gauge theory is used to describe the quantization of [[magnetic flux]] in superconductors, the [[resistivity]] in the [[quantum Hall effect]], as well as the relation between frequency and voltage in the AC [[Josephson effect]].<ref name="wilczek" />

==Principles==
For simplicity, [[natural units]] are used in the following sections, in which the [[reduced Planck constant]] {{math|''ħ''}} and the [[speed of light]] {{math|''c''}} are both set to one.

===Classical fields===
{{See also|Classical field theory}}

A classical [[field (physics)|field]] is a [[function (mathematics)|function]] of spatial and time coordinates.<ref name="tong1">{{harvnb|Tong|2015|loc=Chapter 1}}</ref> Examples include the [[gravitational field]] in [[Newtonian gravity]] {{math|'''g'''('''x''', ''t'')}} and the [[electric field]] {{math|'''E'''('''x''', ''t'')}} and [[magnetic field]] {{math|'''B'''('''x''', ''t'')}} in [[classical electromagnetism]]. A classical field can be thought of as a numerical quantity assigned to every point in space that changes in time. Hence, it has infinitely many [[degrees of freedom (mechanics)|degrees of freedom]].<ref name="tong1" /><ref>In fact, its number of degrees of freedom is uncountable, because the vector space dimension of the space of continuous (differentiable, real analytic) functions on even a finite dimensional Euclidean space is uncountable.  On the other hand, subspaces (of these function spaces) that one typically considers, such as Hilbert spaces (e.g. the space of square integrable real valued functions) or separable Banach spaces (e.g. the space of continuous real-valued functions on a compact interval, with the uniform convergence norm), have denumerable (i. e. countably infinite) dimension in the category of Banach spaces (though still their Euclidean vector space dimension is uncountable), so in these restricted contexts, the number of degrees of freedom (interpreted now as the vector space dimension of a dense subspace rather than the vector space dimension of the function space of interest itself) is denumerable.</ref>

Many phenomena exhibiting quantum mechanical properties cannot be explained by classical fields alone. Phenomena such as the [[photoelectric effect]] are best explained by discrete particles ([[photon]]s), rather than a spatially continuous field. The goal of quantum field theory is to describe various quantum mechanical phenomena using a modified concept of fields.

[[Canonical quantization]] and [[path integral formulation|path integral]]s are two common formulations of QFT.<ref name="zee">{{cite book |last=Zee |first=A. |date=2010 |title=Quantum Field Theory in a Nutshell |url=https://archive.org/details/isbn_9780691140346 |url-access=registration |publisher=Princeton University Press |isbn=978-0-691-01019-9 |author-link=Anthony Zee }}</ref>{{rp|61}} To motivate the fundamentals of QFT, an overview of classical field theory follows.

The simplest classical field is a real [[scalar field]] — a [[real number]] at every point in space that changes in time. It is denoted as {{math|''ϕ''('''x''', ''t'')}}, where {{math|'''x'''}} is the position vector, and {{math|''t''}} is the time. Suppose the [[Lagrangian (field theory)|Lagrangian]] of the field, <math>L</math>, is
:<math>L = \int d^3x\,\mathcal{L} = \int d^3x\,\left[\frac 12 \dot\phi^2 - \frac 12 (\nabla\phi)^2 - \frac 12 m^2\phi^2\right],</math>
where <math>\mathcal{L}</math> is the Lagrangian density, <math>\dot\phi</math> is the time-derivative of the field, {{math|∇}} is the gradient operator, and {{math|''m''}} is a real parameter (the "mass" of the field). Applying the [[Euler–Lagrange equation]] on the Lagrangian:{{r|peskin|page1=16}}
:<math>\frac{\partial}{\partial t} \left[\frac{\partial\mathcal{L}}{\partial(\partial\phi/\partial t)}\right] + \sum_{i=1}^3 \frac{\partial}{\partial x^i} \left[\frac{\partial\mathcal{L}}{\partial(\partial\phi/\partial x^i)}\right] - \frac{\partial\mathcal{L}}{\partial\phi} = 0,</math>
we obtain the [[equations of motion]] for the field, which describe the way it varies in time and space:
:<math>\left(\frac{\partial^2}{\partial t^2} - \nabla^2 + m^2\right)\phi = 0.</math>
This is known as the [[Klein–Gordon equation]].{{r|peskin|page1=17}}

The Klein–Gordon equation is a [[wave equation]], so its solutions can be expressed as a sum of [[normal mode]]s (obtained via [[Fourier transform]]) as follows:
:<math>\phi(\mathbf{x}, t) = \int \frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2\omega_{\mathbf{p}}}}\left(a_{\mathbf{p}} e^{-i\omega_{\mathbf{p}}t + i\mathbf{p}\cdot\mathbf{x}} + a_{\mathbf{p}}^* e^{i\omega_{\mathbf{p}}t - i\mathbf{p}\cdot\mathbf{x}}\right),</math>
where {{math|''a''}} is a [[complex number]] (normalized by convention), {{math|*}} denotes [[complex conjugation]], and {{math|''ω''<sub>'''p'''</sub>}} is the frequency of the normal mode:
:<math>\omega_{\mathbf{p}} = \sqrt{|\mathbf{p}|^2 + m^2}.</math>
Thus each normal mode corresponding to a single {{math|'''p'''}} can be seen as a classical [[harmonic oscillator]] with frequency {{math|''ω''<sub>'''p'''</sub>}}.{{r|peskin|page1=21,26}}

===Canonical quantization===
{{Main|Canonical quantization}}

The quantization procedure for the above classical field to a quantum operator field is analogous to the promotion of a classical harmonic oscillator to a [[quantum harmonic oscillator]].

The displacement of a classical harmonic oscillator is described by
:<math>x(t) = \frac{1}{\sqrt{2\omega}} a e^{-i\omega t} + \frac{1}{\sqrt{2\omega}} a^* e^{i\omega t},</math>
where {{math|''a''}} is a complex number (normalized by convention), and {{math|''ω''}} is the oscillator's frequency. Note that {{math|''x''}} is the displacement of a particle in simple harmonic motion from the equilibrium position,  not to be confused with the spatial label {{math|'''x'''}} of a quantum field.

For a quantum harmonic oscillator, {{math|''x''(''t'')}} is promoted to a [[linear operator]] <math>\hat x(t)</math>:
:<math>\hat x(t) = \frac{1}{\sqrt{2\omega}} \hat a e^{-i\omega t} + \frac{1}{\sqrt{2\omega}} \hat a^\dagger e^{i\omega t}.</math>
Complex numbers {{math|''a''}} and {{math|''a''<sup>*</sup>}} are replaced by the [[annihilation operator]] <math>\hat a</math> and the [[creation operator]] <math>\hat a^\dagger</math>, respectively, where {{math|†}} denotes [[Hermitian conjugation]]. The [[commutation relation]] between the two is
:<math>\left[\hat a, \hat a^\dagger\right] = 1.</math>
The [[Hamiltonian (quantum mechanics)|Hamiltonian]] of the simple harmonic oscillator can be written as
:<math>\hat H = \hbar\omega \hat{a}^\dagger \hat{a} +\frac{1}{2}\hbar\omega.</math>
The [[vacuum state]] <math>|0\rang</math>, which is the lowest energy state, is defined by
:<math>\hat a|0\rang = 0</math>
and has energy <math>\frac12\hbar\omega.</math>
One can easily check that <math>[\hat H, \hat{a}^\dagger]=\hbar\omega\hat{a}^\dagger,</math> which implies that <math>\hat{a}^\dagger</math> increases the energy of the simple harmonic oscillator by <math>\hbar\omega</math>. For example, the state <math>\hat{a}^\dagger|0\rang</math> is an eigenstate of energy <math>3\hbar\omega/2</math>.
Any energy eigenstate state of a single harmonic oscillator can be obtained from <math>|0\rang</math> by successively applying the creation operator <math>\hat a^\dagger</math>:{{r|peskin|page1=20}} and any state of the system can be expressed as a linear combination of the states
:<math>|n\rang \propto \left(\hat a^\dagger\right)^n|0\rang.</math>

A similar procedure can be applied to the real scalar field {{math|''ϕ''}}, by promoting it to a quantum field operator <math>\hat\phi</math>, while the annihilation operator <math>\hat a_{\mathbf{p}}</math>, the creation operator <math>\hat a_{\mathbf{p}}^\dagger</math> and the angular frequency <math>\omega_\mathbf {p}</math>are now for a particular {{math|'''p'''}}:
:<math>\hat \phi(\mathbf{x}, t) = \int \frac{d^3p}{(2\pi)^3} \frac{1}{\sqrt{2\omega_{\mathbf{p}}}}\left(\hat a_{\mathbf{p}} e^{-i\omega_{\mathbf{p}}t + i\mathbf{p}\cdot\mathbf{x}} + \hat a_{\mathbf{p}}^\dagger e^{i\omega_{\mathbf{p}}t - i\mathbf{p}\cdot\mathbf{x}}\right).</math>
Their commutation relations are:{{r|peskin|page1=21}}
:<math>\left[\hat a_{\mathbf p}, \hat a_{\mathbf q}^\dagger\right] = (2\pi)^3\delta(\mathbf{p} - \mathbf{q}),\quad \left[\hat a_{\mathbf p}, \hat a_{\mathbf q}\right] = \left[\hat a_{\mathbf p}^\dagger, \hat a_{\mathbf q}^\dagger\right] = 0,</math>
where {{math|''δ''}} is the [[Dirac delta function]]. The vacuum state <math>|0\rang</math> is defined by
:<math>\hat a_{\mathbf p}|0\rang = 0,\quad \text{for all }\mathbf p.</math>
Any quantum state of the field can be obtained from <math>|0\rang</math> by successively applying creation operators <math>\hat a_{\mathbf{p}}^\dagger</math> (or by a linear combination of such states), e.g. {{r|peskin|page1=22}}
:<math>\left(\hat a_{\mathbf{p}_3}^\dagger\right)^3 \hat a_{\mathbf{p}_2}^\dagger \left(\hat a_{\mathbf{p}_1}^\dagger\right)^2 |0\rang.</math>

While the state space of a single quantum harmonic oscillator contains all the discrete energy states of one oscillating particle, the state space of a quantum field contains the discrete energy levels of an arbitrary number of particles. The latter space is known as a [[Fock space]], which can account for the fact that particle numbers are not fixed in relativistic quantum systems.<ref>{{cite journal |last1=Fock |first1=V. |author-link=Vladimir Fock |date=1932-03-10 |title=Konfigurationsraum und zweite Quantelung |journal=Zeitschrift für Physik |volume=75 |issue=9–10 |pages=622–647 |doi=10.1007/BF01344458 |language=de |bibcode=1932ZPhy...75..622F |s2cid=186238995 }}</ref> The process of quantizing an arbitrary number of particles instead of a single particle is often also called [[second quantization]].{{r|peskin|page1=19}}

The foregoing procedure is a direct application of non-relativistic quantum mechanics and can be used to quantize (complex) scalar fields, [[Dirac field]]s,{{r|peskin|page1=52}} [[vector field]]s (''e.g.'' the electromagnetic field), and even [[string theory|strings]].<ref>{{cite book |last1=Becker |first1=Katrin |last2=Becker |first2=Melanie|author-link2=Melanie Becker |last3=Schwarz |first3=John H. |date=2007 |title=String Theory and M-Theory |url=https://archive.org/details/stringtheorymthe00beck_649 |url-access=limited |publisher=Cambridge University Press |page=[https://archive.org/details/stringtheorymthe00beck_649/page/n53 36] |isbn=978-0-521-86069-7 |author-link3=John Henry Schwarz }}</ref> However, creation and annihilation operators are only well defined in the simplest theories that contain no interactions (so-called free theory). In the case of the real scalar field, the existence of these operators was a consequence of the decomposition of solutions of the classical equations of motion into a sum of normal modes. To perform calculations on any realistic interacting theory, [[perturbation theory (quantum mechanics)|perturbation theory]] would be necessary.

The Lagrangian of any quantum field in nature would contain interaction terms in addition to the free theory terms. For example, a [[quartic interaction]] term could be introduced to the Lagrangian of the real scalar field:{{r|peskin|page1=77}}
:<math>\mathcal{L} = \frac 12 (\partial_\mu\phi)\left(\partial^\mu\phi\right) - \frac 12 m^2\phi^2 - \frac{\lambda}{4!}\phi^4,</math>
where {{math|''μ''}} is a spacetime index, <math>\partial_0 = \partial/\partial t,\ \partial_1 = \partial/\partial x^1</math>, etc. The summation over the index {{math|''μ''}} has been omitted following the [[Einstein notation]]. If the parameter {{math|''λ''}} is sufficiently small, then the interacting theory described by the above Lagrangian can be considered as a small perturbation from the free theory.

===Path integrals===
{{Main|Path integral formulation}}

The [[path integral formulation]] of QFT is concerned with the direct computation of the [[scattering amplitude]] of a certain interaction process, rather than the establishment of operators and state spaces. To calculate the [[probability amplitude]] for a system to evolve from some initial state <math>|\phi_I\rang</math> at time {{math|''t'' {{=}} 0}} to some final state <math>|\phi_F\rang</math> at {{math|''t'' {{=}} ''T''}}, the total time {{math|''T''}} is divided into {{math|''N''}} small intervals. The overall amplitude is the product of the amplitude of evolution within each interval, integrated over all intermediate states. Let {{math|''H''}} be the [[Hamiltonian (quantum mechanics)|Hamiltonian]] (''i.e.'' [[time evolution operator|generator of time evolution]]), then{{r|zee|page1=10}}
:<math>\lang \phi_F|e^{-iHT}|\phi_I\rang = \int d\phi_1\int d\phi_2\cdots\int d\phi_{N-1}\,\lang \phi_F|e^{-iHT/N}|\phi_{N-1}\rang\cdots\lang \phi_2|e^{-iHT/N}|\phi_1\rang\lang \phi_1|e^{-iHT/N}|\phi_I\rang.</math>
Taking the limit {{math|''N'' → ∞}}, the above product of integrals becomes the Feynman path integral:{{r|peskin|zee|page1=282|page2=12}}
:<math>\lang \phi_F|e^{-iHT}|\phi_I\rang = \int \mathcal{D}\phi(t)\,\exp\left\{i\int_0^T dt\,L\right\},</math>
where {{math|''L''}} is the Lagrangian involving {{math|''ϕ''}} and its derivatives with respect to spatial and time coordinates, obtained from the Hamiltonian {{math|''H''}} via [[Legendre transformation]]. The initial and final conditions of the path integral are respectively
:<math>\phi(0) = \phi_I,\quad \phi(T) = \phi_F.</math>
In other words, the overall amplitude is the sum over the amplitude of every possible path between the initial and final states, where the amplitude of a path is given by the exponential in the integrand.

===Two-point correlation function===
{{Main|Correlation function (quantum field theory)}}

In calculations, one often encounters expression like<math display="block">\lang 0|T\{\phi(x)\phi(y)\}|0\rang
\quad \text{or} \quad
\lang \Omega |T\{\phi(x)\phi(y)\}|\Omega \rang</math>in the free or interacting theory, respectively. Here, <math>x</math> and <math>y</math> are position [[four-vector]]s, <math>T</math> is the [[time ordering]] operator that shuffles its operands so the time-components <math>x^0</math> and <math>y^0</math> increase from right to left, and <math>|\Omega\rang</math> is the ground state (vacuum state) of the interacting theory, different from the free ground state <math>| 0 \rang</math>. This expression represents the probability amplitude for the field to propagate from {{math|''y''}} to {{math|''x''}}, and goes by multiple names, like the two-point [[propagator]], two-point [[correlation function (quantum field theory)|correlation function]], two-point [[Green's function]] or two-point function for short.{{r|peskin|page1=82}}

The free two-point function, also known as the [[Feynman propagator]], can be found for the real scalar field by either canonical quantization or path integrals to be{{r|peskin|zee|page1=31,288|page2=23}}
:<math>\lang 0|T\{\phi(x)\phi(y)\} |0\rang \equiv D_F(x-y) = \lim_{\epsilon\to 0} \int\frac{d^4p}{(2\pi)^4} \frac{i}{p_\mu p^\mu - m^2 + i\epsilon} e^{-ip_\mu (x^\mu - y^\mu)}.</math>
In an interacting theory, where the Lagrangian or Hamiltonian contains terms <math>L_I(t)</math> or <math>H_I(t)</math> that describe interactions, the two-point function is more difficult to define. However, through both the canonical quantization formulation and the path integral formulation, it is possible to express it through an infinite perturbation series of the ''free'' two-point function.

In canonical quantization, the two-point correlation function can be written as:{{r|peskin|page1=87}}
:<math>\lang\Omega|T\{\phi(x)\phi(y)\}|\Omega\rang = \lim_{T\to\infty(1-i\epsilon)} \frac{\left\lang 0\left|T\left\{\phi_I(x)\phi_I(y)\exp\left[-i\int_{-T}^T dt\, H_I(t)\right]\right\}\right|0\right\rang}{\left\lang 0\left|T\left\{\exp\left[-i\int_{-T}^T dt\, H_I(t)\right]\right\}\right|0\right\rang},</math>
where {{math|''ε''}} is an [[infinitesimal]] number and {{math|''ϕ<sub>I</sub>''}} is the field operator under the free theory. Here, the [[Exponential function|exponential]] should be understood as its [[power series]] expansion. For example, in <math>\phi^4</math>-theory, the interacting term of the Hamiltonian is <math display="inline">H_I(t) = \int d^3 x\,\frac{\lambda}{4!}\phi_I(x)^4</math>,{{r|peskin|page1=84}} and the expansion of the two-point correlator in terms of <math>\lambda</math> becomes<math display="block">\lang\Omega|T\{\phi(x)\phi(y)\}|\Omega\rang = 
\frac{
    \displaystyle \sum_{n=0}^\infty \frac{(-i \lambda)^n}{(4 !)^n n !} \int d^4 z_1 \cdots \int d^4 z_n \lang 0|T\{\phi_I(x)\phi_I(y)\phi_I(z_1)^4\cdots\phi_I(z_n)^4\}|0\rang}{
    \displaystyle \sum_{n=0}^\infty \frac{(-i \lambda)^n}{(4 !)^n n !} \int d^4 z_1 \cdots \int d^4 z_n \lang 0|T\{                  \phi_I(z_1)^4\cdots\phi_I(z_n)^4\}|0\rang
}.</math>This perturbation expansion expresses the interacting two-point function in terms of quantities <math>\lang 0 | \cdots | 0 \rang</math> that are evaluated in the ''free'' theory.

In the path integral formulation, the two-point correlation function can be written{{r|peskin|page1=284}}
:<math>\lang\Omega|T\{\phi(x)\phi(y)\}|\Omega\rang = \lim_{T\to\infty(1-i\epsilon)} \frac{\int\mathcal{D}\phi\,\phi(x)\phi(y)\exp\left[i\int_{-T}^T d^4z\,\mathcal{L}\right]}{\int\mathcal{D}\phi\,\exp\left[i\int_{-T}^T d^4z\,\mathcal{L}\right]},</math>
where <math>\mathcal{L}</math> is the Lagrangian density. As in the previous paragraph, the exponential can be expanded as a series in {{math|''λ''}}, reducing the interacting two-point function to quantities in the free theory.

[[Wick's theorem]] further reduce any {{math|''n''}}-point correlation function in the free theory to a sum of products of two-point correlation functions. For example,
:<math>\begin{align}
\lang 0|T\{\phi(x_1)\phi(x_2)\phi(x_3)\phi(x_4)\}|0\rang &= \lang 0|T\{\phi(x_1)\phi(x_2)\}|0\rang \lang 0|T\{\phi(x_3)\phi(x_4)\}|0\rang\\
&+ \lang 0|T\{\phi(x_1)\phi(x_3)\}|0\rang \lang 0|T\{\phi(x_2)\phi(x_4)\}|0\rang\\
&+ \lang 0|T\{\phi(x_1)\phi(x_4)\}|0\rang \lang 0|T\{\phi(x_2)\phi(x_3)\}|0\rang.
\end{align}</math>
Since interacting correlation functions can be expressed in terms of free correlation functions, only the latter need to be evaluated in order to calculate all physical quantities in the (perturbative) interacting theory.{{r|peskin|page1=90}} This makes the Feynman propagator one of the most important quantities in quantum field theory.

===Feynman diagram===
{{Main|Feynman diagram}}

Correlation functions in the interacting theory can be written as a perturbation series. Each term in the series is a product of Feynman propagators in the free theory and can be represented visually by a [[Feynman diagram]]. For example, the {{math|''λ''<sup>1</sup>}} term in the two-point correlation function in the {{math|''ϕ''<sup>4</sup>}} theory is
:<math>\frac{-i\lambda}{4!}\int d^4z\,\lang 0|T\{\phi(x)\phi(y)\phi(z)\phi(z)\phi(z)\phi(z)\}|0\rang.</math>
After applying Wick's theorem, one of the terms is
:<math>12\cdot \frac{-i\lambda}{4!}\int d^4z\, D_F(x-z)D_F(y-z)D_F(z-z).</math>
This term can instead be obtained from the Feynman diagram

:[[File:Phi-4 one-loop.svg|200px]].

The diagram consists of

* ''external vertices'' connected with one edge and represented by dots (here labeled <math>x</math> and <math>y</math>).
* ''internal vertices'' connected with four edges and represented by dots (here labeled <math>z</math>).
* ''edges'' connecting the vertices and represented by lines.

Every vertex corresponds to a single <math>\phi</math> field factor at the corresponding point in spacetime, while the edges correspond to the propagators between the spacetime points. The term in the perturbation series corresponding to the diagram is obtained by writing down the expression that follows from the so-called Feynman rules:

# For every internal vertex <math>z_i</math>, write down a factor <math display="inline">-i \lambda \int d^4 z_i</math>.
# For every edge that connects two vertices <math>z_i</math> and <math>z_j</math>, write down a factor <math>D_F(z_i-z_j)</math>.
# Divide by the symmetry factor of the diagram.

With the symmetry factor <math>2</math>, following these rules yields exactly the expression above. By Fourier transforming the propagator, the Feynman rules can be reformulated from position space into momentum space.{{r|peskin|page1=91–94}}

In order to compute the {{math|''n''}}-point correlation function to the {{math|''k''}}-th order, list all valid Feynman diagrams with {{math|''n''}} external points and {{math|''k''}} or fewer vertices, and then use Feynman rules to obtain the expression for each term. To be precise,
:<math>\lang\Omega|T\{\phi(x_1)\cdots\phi(x_n)\}|\Omega\rang</math>
is equal to the sum of (expressions corresponding to) all connected diagrams with {{math|''n''}} external points. (Connected diagrams are those in which every vertex is connected to an external point through lines. Components that are totally disconnected from external lines are sometimes called "vacuum bubbles".) In the {{math|''ϕ''<sup>4</sup>}} interaction theory discussed above, every vertex must have four legs.{{r|peskin|page1=98}}

In realistic applications, the scattering amplitude of a certain interaction or the [[decay rate]] of a particle can be computed from the [[S-matrix]], which itself can be found using the Feynman diagram method.{{r|peskin|page1=102–115}}

Feynman diagrams devoid of "loops" are called tree-level diagrams, which describe the lowest-order interaction processes; those containing {{math|''n''}} loops are referred to as {{math|''n''}}-loop diagrams, which describe higher-order contributions, or radiative corrections, to the interaction.{{r|zee|page1=44}} Lines whose end points are vertices can be thought of as the propagation of [[virtual particle]]s.{{r|peskin|page1=31}}

===Renormalization===
{{Main|Renormalisation}}

Feynman rules can be used to directly evaluate tree-level diagrams. However, naïve computation of loop diagrams such as the one shown above will result in divergent momentum integrals, which seems to imply that almost all terms in the perturbative expansion are infinite. The [[renormalisation]] procedure is a systematic process for removing such infinities.

Parameters appearing in the Lagrangian, such as the mass {{math|''m''}} and the coupling constant {{math|''λ''}}, have no physical meaning — {{math|''m''}}, {{math|''λ''}}, and the field strength {{math|''ϕ''}} are not experimentally measurable quantities and are referred to here as the bare mass, bare coupling constant, and bare field, respectively. The physical mass and coupling constant are measured in some interaction process and are generally different from the bare quantities. While computing physical quantities from this interaction process, one may limit the domain of divergent momentum integrals to be below some momentum cut-off {{math|Λ}}, obtain expressions for the physical quantities, and then take the limit {{math|Λ → ∞}}. This is an example of [[regularization (physics)|regularization]], a class of methods to treat divergences in QFT, with {{math|Λ}} being the regulator.

The approach illustrated above is called bare perturbation theory, as calculations involve only the bare quantities such as mass and coupling constant. A different approach, called renormalized perturbation theory, is to use physically meaningful quantities from the very beginning. In the case of {{math|''ϕ''<sup>4</sup>}} theory, the field strength is first redefined:
:<math>\phi = Z^{1/2}\phi_r,</math>
where {{math|''ϕ''}} is the bare field, {{math|''ϕ<sub>r</sub>''}} is the renormalized field, and {{math|''Z''}} is a constant to be determined. The Lagrangian density becomes:
:<math>\mathcal{L} = \frac 12 (\partial_\mu\phi_r)(\partial^\mu\phi_r) - \frac 12 m_r^2\phi_r^2 - \frac{\lambda_r}{4!}\phi_r^4 + \frac 12 \delta_Z (\partial_\mu\phi_r)(\partial^\mu\phi_r) - \frac 12 \delta_m\phi_r^2 - \frac{\delta_\lambda}{4!}\phi_r^4,</math>
where {{math|''m<sub>r</sub>''}} and {{math|''λ<sub>r</sub>''}} are the experimentally measurable, renormalized, mass and coupling constant, respectively, and
:<math>\delta_Z = Z-1,\quad \delta_m = m^2Z - m_r^2,\quad \delta_\lambda = \lambda Z^2 - \lambda_r</math>
are constants to be determined. The first three terms are the {{math|''ϕ''<sup>4</sup>}} Lagrangian density written in terms of the renormalized quantities, while the latter three terms are referred to as "counterterms". As the Lagrangian now contains more terms, so the Feynman diagrams should include additional elements, each with their own Feynman rules. The procedure is outlined as follows. First select a regularization scheme (such as the cut-off regularization introduced above or [[dimensional regularization]]); call the regulator {{math|Λ}}. Compute Feynman diagrams, in which divergent terms will depend on {{math|Λ}}. Then, define {{math|''δ<sub>Z</sub>''}}, {{math|''δ<sub>m</sub>''}}, and {{math|''δ<sub>λ</sub>''}} such that Feynman diagrams for the counterterms will exactly cancel the divergent terms in the normal Feynman diagrams when the limit {{math|Λ → ∞}} is taken. In this way, meaningful finite quantities are obtained.{{r|peskin|page1=323–326}}

<!--"Is it true?" The renormalization procedure will lead to the same quantitative result and physical prediction irrespective of the regularization scheme chosen. -->It is only possible to eliminate all infinities to obtain a finite result in renormalizable theories, whereas in non-renormalizable theories infinities cannot be removed by the redefinition of a small number of parameters. The [[Standard Model]] of elementary particles is a renormalizable QFT,{{r|peskin|page1=719–727}} while [[quantum gravity]] is non-renormalizable.{{r|peskin|zee|page1=798|page2=421}}

====Renormalization group====
{{Main|Renormalization group}}

The [[renormalization group]], developed by [[Kenneth G. Wilson|Kenneth Wilson]], is a mathematical apparatus used to study the changes in physical parameters (coefficients in the Lagrangian) as the system is viewed at different scales.{{r|peskin|page1=393}} The way in which each parameter changes with scale is described by its [[beta function (physics)|''β'' function]].{{r|peskin|page1=417}} Correlation functions, which underlie quantitative physical predictions, change with scale according to the [[Callan–Symanzik equation]].{{r|peskin|page1=410–411}}

As an example, the coupling constant in QED, namely the [[elementary charge]] {{math|''e''}}, has the following ''β'' function:
:<math>\beta(e) \equiv \frac{1}{\Lambda}\frac{de}{d\Lambda} = \frac{e^3}{12\pi^2} + O\mathord\left(e^5\right),</math>
where {{math|Λ}} is the energy scale under which the measurement of {{math|''e''}} is performed. This [[differential equation]] implies that the observed elementary charge increases as the scale increases.<ref>{{cite arXiv |last=Fujita |first=Takehisa |eprint=hep-th/0606101 |title=Physics of Renormalization Group Equation in QED |date=2008-02-01 }}</ref> The renormalized coupling constant, which changes with the energy scale, is also called the running coupling constant.{{r|peskin|page1=420}}

The coupling constant {{math|''g''}} in [[quantum chromodynamics]], a non-Abelian gauge theory based on the symmetry group {{math|[[special unitary group|SU(3)]]}}, has the following ''β'' function:
:<math>\beta(g) \equiv \frac{1}{\Lambda}\frac{dg}{d\Lambda} = \frac{g^3}{16\pi^2}\left(-11 + \frac 23 N_f\right) + O\mathord\left(g^5\right),</math>
where {{math|''N<sub>f</sub>''}} is the number of [[quark]] [[flavour (particle physics)|flavours]]. In the case where {{math|''N<sub>f</sub>'' ≤ 16}} (the Standard Model has {{math|''N<sub>f</sub>'' {{=}} 6}}), the coupling constant {{math|''g''}} decreases as the energy scale increases. Hence, while the strong interaction is strong at low energies, it becomes very weak in high-energy interactions, a phenomenon known as [[asymptotic freedom]].{{r|peskin|page1=531}}

[[Conformal field theories]] (CFTs) are special QFTs that admit [[conformal symmetry]]. They are insensitive to changes in the scale, as all their coupling constants have vanishing ''β'' function. (The converse is not true, however — the vanishing of all ''β'' functions does not imply conformal symmetry of the theory.)<ref>{{Cite journal |last1=Aharony |first1=Ofer |last2=Gur-Ari |first2=Guy |last3=Klinghoffer |first3=Nizan |arxiv=1501.06664 |title=The Holographic Dictionary for Beta Functions of Multi-trace Coupling Constants |journal=Journal of High Energy Physics |volume=2015 |issue=5 |pages=31 |date=2015-05-19 |bibcode=2015JHEP...05..031A |doi=10.1007/JHEP05(2015)031 |s2cid=115167208 }}</ref> Examples include [[string theory]]<ref name="polchinski1">{{cite book |last=Polchinski |first=Joseph |date=2005 |title=String Theory |volume=1 |publisher=Cambridge University Press |isbn=978-0-521-67227-6 |author-link=Joseph Polchinski }}</ref> and [[N = 4 supersymmetric Yang–Mills theory|{{math|''N'' {{=}} 4}} supersymmetric Yang–Mills theory]].<ref>{{cite arXiv |last=Kovacs |first=Stefano |eprint=hep-th/9908171 |title={{math|''N'' {{=}} 4}} supersymmetric Yang–Mills theory and the AdS/SCFT correspondence |date=1999-08-26 }}</ref>

According to Wilson's picture, every QFT is fundamentally accompanied by its energy cut-off {{math|Λ}}, ''i.e.'' that the theory is no longer valid at energies higher than {{math|Λ}}, and all degrees of freedom above the scale {{math|Λ}} are to be omitted. For example, the cut-off could be the inverse of the atomic spacing in a condensed matter system, and in elementary particle physics it could be associated with the fundamental "graininess" of spacetime caused by quantum fluctuations in gravity. The cut-off scale of theories of particle interactions lies far beyond current experiments. Even if the theory were very complicated at that scale, as long as its couplings are sufficiently weak, it must be described at low energies by a renormalizable [[effective field theory]].{{r|peskin|page1=402–403}} The difference between renormalizable and non-renormalizable theories is that the former are insensitive to details at high energies, whereas the latter do depend on them.{{r|shifman|page1=2}} According to this view, non-renormalizable theories are to be seen as low-energy effective theories of a more fundamental theory. The failure to remove the cut-off {{math|Λ}} from calculations in such a theory merely indicates that new physical phenomena appear at scales above {{math|Λ}}, where a new theory is necessary.{{r|zee|page1=156}}

===Other theories===
The quantization and renormalization procedures outlined in the preceding sections are performed for the free theory and [[quartic interaction|{{math|''ϕ''<sup>4</sup>}} theory]] of the real scalar field. A similar process can be done for other types of fields, including the [[complex numbers|complex]] scalar field, the [[vector field]], and the [[Dirac field]], as well as other types of interaction terms, including the electromagnetic interaction and the [[Yukawa interaction]].

As an example, [[quantum electrodynamics]] contains a Dirac field {{math|''ψ''}} representing the [[electron]] field and a vector field {{math|''A<sup>μ</sup>''}} representing the electromagnetic field ([[photon]] field). (Despite its name, the quantum electromagnetic "field" actually corresponds to the classical [[electromagnetic four-potential]], rather than the classical electric and magnetic fields.) The full QED Lagrangian density is:
:<math>\mathcal{L} = \bar\psi\left(i\gamma^\mu\partial_\mu - m\right)\psi - \frac 14 F_{\mu\nu}F^{\mu\nu} - e\bar\psi\gamma^\mu\psi A_\mu,</math>
where {{math|''γ<sup>μ</sup>''}} are [[Dirac matrices]], <math>\bar\psi = \psi^\dagger\gamma^0</math>, and <math>F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu</math> is the [[electromagnetic field strength]]. The parameters in this theory are the (bare) electron mass {{math|''m''}} and the (bare) [[elementary charge]] {{math|''e''}}. The first and second terms in the Lagrangian density correspond to the free Dirac field and free vector fields, respectively. The last term describes the interaction between the electron and photon fields, which is treated as a perturbation from the free theories.{{r|peskin|page1=78}}

[[File:ElectronPositronAnnihilation.svg|250px]]

Shown above is an example of a tree-level Feynman diagram in QED. It describes an electron and a positron annihilating, creating an [[off-shell]] photon, and then decaying into a new pair of electron and positron. Time runs from left to right. Arrows pointing forward in time represent the propagation of positrons, while those pointing backward in time represent the propagation of electrons. A wavy line represents the propagation of a photon. Each vertex in QED Feynman diagrams must have an incoming and an outgoing fermion (positron/electron) leg as well as a photon leg.

====Gauge symmetry====
{{Main|Gauge theory}}

If the following transformation to the fields is performed at every spacetime point {{math|''x''}} (a local transformation), then the QED Lagrangian remains unchanged, or invariant:
:<math>\psi(x) \to e^{i\alpha(x)}\psi(x),\quad A_\mu(x) \to A_\mu(x) + ie^{-1} e^{-i\alpha(x)}\partial_\mu e^{i\alpha(x)},</math>
where {{math|''α''(''x'')}} is any function of spacetime coordinates. If a theory's Lagrangian (or more precisely the [[action (physics)|action]]) is invariant under a certain local transformation, then the transformation is referred to as a [[gauge symmetry]] of the theory.{{r|peskin|page1=482–483}} Gauge symmetries form a [[group (mathematics)|group]] at every spacetime point. In the case of QED, the successive application of two different local symmetry transformations <math>e^{i\alpha(x)}</math> and <math>e^{i\alpha'(x)}</math> is yet another symmetry transformation <math>e^{i[\alpha(x)+\alpha'(x)]}</math>. For any {{math|''α''(''x'')}}, <math>e^{i\alpha(x)}</math> is an element of the {{math|[[U(1)]]}} group, thus QED is said to have {{math|U(1)}} gauge symmetry.{{r|peskin|page1=496}} The photon field {{math|''A<sub>μ</sub>''}} may be referred to as the {{math|U(1)}} [[gauge boson]].

{{math|U(1)}} is an [[Abelian group]], meaning that the result is the same regardless of the order in which its elements are applied. QFTs can also be built on [[non-Abelian group]]s, giving rise to [[Yang–Mills theory|non-Abelian gauge theories]] (also known as Yang–Mills theories).{{r|peskin|page1=489}} [[Quantum chromodynamics]], which describes the strong interaction, is a non-Abelian gauge theory with an {{math|[[special unitary group|SU(3)]]}} gauge symmetry. It contains three Dirac fields {{math|''ψ<sup>i</sup>'', ''i'' {{=}} 1,2,3}} representing [[quark]] fields as well as eight vector fields {{math|''A<sup>a,μ</sup>'', ''a'' {{=}} 1,...,8}} representing [[gluon]] fields, which are the {{math|SU(3)}} gauge bosons.{{r|peskin|page1=547}} The QCD Lagrangian density is:{{r|peskin|page1=490–491}}
:<math>\mathcal{L} = i\bar\psi^i \gamma^\mu (D_\mu)^{ij} \psi^j - \frac 14 F_{\mu\nu}^aF^{a,\mu\nu} - m\bar\psi^i \psi^i,</math>
where {{math|''D<sub>μ</sub>''}} is the gauge [[covariant derivative]]:
:<math>D_\mu = \partial_\mu - igA_\mu^a t^a,</math>
where {{math|''g''}} is the coupling constant, {{math|''t<sup>a</sup>''}} are the eight [[Lie algebra|generators]] of {{math|SU(3)}} in the [[fundamental representation]] ({{math|3×3}} matrices),
:<math>F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + gf^{abc}A_\mu^b A_\nu^c,</math>
and {{math|''f<sup>abc</sup>''}} are the [[structure constants]] of {{math|SU(3)}}. Repeated indices {{math|''i'',''j'',''a''}} are implicitly summed over following Einstein notation. This Lagrangian is invariant under the transformation:
:<math>\psi^i(x) \to U^{ij}(x)\psi^j(x),\quad A_\mu^a(x) t^a \to U(x)\left[A_\mu^a(x) t^a + ig^{-1} \partial_\mu\right]U^\dagger(x),</math>
where {{math|''U''(''x'')}} is an element of {{math|SU(3)}} at every spacetime point {{math|''x''}}:
:<math>U(x) = e^{i\alpha(x)^a t^a}.</math>

The preceding discussion of symmetries is on the level of the Lagrangian. In other words, these are "classical" symmetries. After quantization, some theories will no longer exhibit their classical symmetries, a phenomenon called [[anomaly (physics)|anomaly]]. For instance, in the path integral formulation, despite the invariance of the Lagrangian density <math>\mathcal{L}[\phi,\partial_\mu\phi]</math> under a certain local transformation of the fields, the [[measure (mathematics)|measure]] <math display="inline">\int\mathcal D\phi</math> of the path integral may change.{{r|zee|page1=243}} For a theory describing nature to be consistent, it must not contain any anomaly in its gauge symmetry. The Standard Model of elementary particles is a gauge theory based on the group {{math|SU(3) × SU(2) × U(1)}}, in which all anomalies exactly cancel.{{r|peskin|page1=705–707}}

The theoretical foundation of [[general relativity]], the [[equivalence principle]], can also be understood as a form of gauge symmetry, making general relativity a gauge theory based on the [[Lorentz group]].<ref>Veltman, M. J. G. (1976). ''Methods in Field Theory, Proceedings of the Les Houches Summer School, Les Houches, France, 1975''.</ref>

[[Noether's theorem]] states that every continuous symmetry, ''i.e.'' the parameter in the symmetry transformation being continuous rather than discrete, leads to a corresponding [[conservation law]].{{r|peskin|zee|page1=17–18|page2=73}} For example, the {{math|U(1)}} symmetry of QED implies [[charge conservation]].<ref>{{cite journal |last1=Brading |first1=Katherine A. |date=March 2002 |title=Which symmetry? Noether, Weyl, and conservation of electric charge |journal=Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics |volume=33 |issue=1 |pages=3–22 |doi=10.1016/S1355-2198(01)00033-8 |bibcode=2002SHPMP..33....3B |citeseerx=10.1.1.569.106 }}</ref>

Gauge-transformations do not relate distinct quantum states. Rather, it relates two equivalent mathematical descriptions of the same quantum state. As an example, the photon field {{math|''A<sup>μ</sup>''}}, being a [[four-vector]], has four apparent degrees of freedom, but the actual state of a photon is described by its two degrees of freedom corresponding to the [[photon polarization|polarization]]. The remaining two degrees of freedom are said to be "redundant" — apparently different ways of writing {{math|''A<sup>μ</sup>''}} can be related to each other by a gauge transformation and in fact describe the same state of the photon field. In this sense, gauge invariance is not a "real" symmetry, but a reflection of the "redundancy" of the chosen mathematical description.{{r|zee|page1=168}}

To account for the gauge redundancy in the path integral formulation, one must perform the so-called [[Faddeev–Popov ghost|Faddeev–Popov]] [[gauge fixing]] procedure. In non-Abelian gauge theories, such a procedure introduces new fields called "ghosts". Particles corresponding to the ghost fields are called ghost particles, which cannot be detected externally.{{r|peskin|page1=512–515}} A more rigorous generalization of the Faddeev–Popov procedure is given by [[BRST quantization]].{{r|peskin|page1=517}}

====Spontaneous symmetry-breaking====
{{Main|Spontaneous symmetry breaking}}

[[Spontaneous symmetry breaking]] is a mechanism whereby the symmetry of the Lagrangian is violated by the system described by it.{{r|peskin|page1=347}}

To illustrate the mechanism, consider a linear [[sigma model]] containing {{math|''N''}} real scalar fields, described by the Lagrangian density:
:<math>\mathcal{L} = \frac 12 \left(\partial_\mu\phi^i\right)\left(\partial^\mu\phi^i\right) + \frac 12 \mu^2 \phi^i\phi^i - \frac{\lambda}{4} \left(\phi^i\phi^i\right)^2,</math>
where {{math|''μ''}} and {{math|''λ''}} are real parameters. The theory admits an {{math|[[orthogonal group|O(''N'')]]}} global symmetry:
:<math>\phi^i \to R^{ij}\phi^j,\quad R\in\mathrm{O}(N).</math>
The lowest energy state (ground state or vacuum state) of the classical theory is any uniform field {{math|''ϕ''<sub>0</sub>}} satisfying
:<math>\phi_0^i \phi_0^i = \frac{\mu^2}{\lambda}.</math>
Without loss of generality, let the ground state be in the {{math|''N''}}-th direction:
:<math>\phi_0^i = \left(0,\cdots,0,\frac{\mu}{\sqrt{\lambda}}\right).</math>
The original {{math|''N''}} fields can be rewritten as:
:<math>\phi^i(x) = \left(\pi^1(x),\cdots,\pi^{N-1}(x),\frac{\mu}{\sqrt{\lambda}} + \sigma(x)\right),</math>
and the original Lagrangian density as:
:<math>\mathcal{L} = \frac 12 \left(\partial_\mu\pi^k\right)\left(\partial^\mu\pi^k\right) + \frac 12 \left(\partial_\mu\sigma\right)\left(\partial^\mu\sigma\right) - \frac 12 \left(2\mu^2\right)\sigma^2 - \sqrt{\lambda}\mu\sigma^3 - \sqrt{\lambda}\mu\pi^k\pi^k\sigma - \frac{\lambda}{2} \pi^k\pi^k\sigma^2 - \frac{\lambda}{4}\left(\pi^k\pi^k\right)^2,</math>
where {{math|''k'' {{=}} 1, ..., ''N'' − 1}}. The original {{math|O(''N'')}} global symmetry is no longer manifest, leaving only the [[subgroup]] {{math|O(''N'' − 1)}}. The larger symmetry before spontaneous symmetry breaking is said to be "hidden" or spontaneously broken.{{r|peskin|page1=349–350}}

[[Goldstone's theorem]] states that under spontaneous symmetry breaking, every broken continuous global symmetry leads to a massless field called the Goldstone boson. In the above example, {{math|O(''N'')}} has {{math|''N''(''N'' − 1)/2}} continuous symmetries (the dimension of its [[Lie algebra]]), while {{math|O(''N'' − 1)}} has {{math|(''N'' − 1)(''N'' − 2)/2}}. The number of broken symmetries is their difference, {{math|''N'' − 1}}, which corresponds to the {{math|''N'' − 1}} massless fields {{math|''π<sup>k</sup>''}}.{{r|peskin|page1=351}}

On the other hand, when a gauge (as opposed to global) symmetry is spontaneously broken, the resulting Goldstone boson is "eaten" by the corresponding gauge boson by becoming an additional degree of freedom for the gauge boson. The Goldstone boson equivalence theorem states that at high energy, the amplitude for emission or absorption of a longitudinally polarized massive gauge boson becomes equal to the amplitude for emission or absorption of the Goldstone boson that was eaten by the gauge boson.{{r|peskin|page1=743–744}}

In the QFT of [[ferromagnetism]], spontaneous symmetry breaking can explain the alignment of [[magnetic dipole]]s at low temperatures.{{r|zee|page1=199}} In the Standard Model of elementary particles, the [[W and Z bosons]], which would otherwise be massless as a result of gauge symmetry, acquire mass through spontaneous symmetry breaking of the [[Higgs boson]], a process called the [[Higgs mechanism]].{{r|peskin|page1=690}}

====Supersymmetry====
{{Main|Supersymmetry}}

All experimentally known symmetries in nature relate [[boson]]s to bosons and [[fermion]]s to fermions. Theorists have hypothesized the existence of a type of symmetry, called [[supersymmetry]], that relates bosons and fermions.{{r|peskin|zee|page1=795|page2=443}}

The Standard Model obeys [[Poincaré group|Poincaré symmetry]], whose generators are the spacetime [[translation (geometry)|translations]] {{math|''P<sup>μ</sup>''}} and the [[Lorentz transformations]] {{math|''J<sub>μν</sub>''}}.<ref name="WeinbergQFT">{{cite book |last=Weinberg |first=Steven |date=1995 |title=The Quantum Theory of Fields |publisher=Cambridge University Press |isbn=978-0-521-55001-7 |author-link=Steven Weinberg |url-access=registration |url=https://archive.org/details/quantumtheoryoff00stev }}</ref>{{rp|58–60}} In addition to these generators, supersymmetry in (3+1)-dimensions includes additional generators {{math|''Q<sub>α</sub>''}}, called [[supercharge]]s, which themselves transform as [[Weyl fermion]]s.{{r|peskin|zee|page1=795|page2=444}} The symmetry group generated by all these generators is known as the [[super-Poincaré group]]. In general there can be more than one set of supersymmetry generators, {{math|''Q<sub>α</sub><sup>I</sup>'', ''I'' {{=}} 1, ..., ''N''}}, which generate the corresponding {{math|''N'' {{=}} 1}} supersymmetry, {{math|''N'' {{=}} 2}} supersymmetry, and so on.{{r|peskin|zee|page1=795|page2=450}} Supersymmetry can also be constructed in other dimensions,<ref>{{cite arXiv |last1=de Wit |first1=Bernard |last2=Louis |first2=Jan |eprint=hep-th/9801132 |title=Supersymmetry and Dualities in various dimensions |date=1998-02-18 }}</ref> most notably in (1+1) dimensions for its application in [[superstring theory]].<ref>{{cite book |last=Polchinski |first=Joseph |date=2005 |title=String Theory |volume=2 |publisher=Cambridge University Press |isbn=978-0-521-67228-3 |author-link=Joseph Polchinski }}</ref>

The Lagrangian of a supersymmetric theory must be invariant under the action of the super-Poincaré group.{{r|zee|page1=448}} Examples of such theories include: [[Minimal Supersymmetric Standard Model]] (MSSM), [[N {{=}} 4 supersymmetric Yang–Mills theory|{{math|''N'' {{=}} 4}} supersymmetric Yang–Mills theory]],{{r|zee|page1=450}} and superstring theory. In a supersymmetric theory, every fermion has a bosonic [[superpartner]] and vice versa.{{r|zee|page1=444}}

If supersymmetry is promoted to a local symmetry, then the resultant gauge theory is an extension of general relativity called [[supergravity]].<ref name="NathArnowitt">{{cite journal | last1 = Nath | first1 = P. | last2 = Arnowitt | first2 = R. | year = 1975 | title = Generalized Super-Gauge Symmetry as a New Framework for Unified Gauge Theories | journal = Physics Letters B | volume = 56 | issue = 2| page = 177 | doi=10.1016/0370-2693(75)90297-x| bibcode = 1975PhLB...56..177N }}</ref>

Supersymmetry is a potential solution to many current problems in physics. For example, the [[hierarchy problem]] of the Standard Model—why the mass of the Higgs boson is not radiatively corrected (under renormalization) to a very high scale such as the [[Grand Unified Theory|grand unified scale]] or the [[Planck mass|Planck scale]]—can be resolved by relating the [[Higgs field]] and its super-partner, the [[Higgsino]]. Radiative corrections due to Higgs boson loops in Feynman diagrams are cancelled by corresponding Higgsino loops. Supersymmetry also offers answers to the grand unification of all gauge coupling constants in the Standard Model as well as the nature of [[dark matter]].{{r|peskin|page1=796–797}}<ref>{{Cite journal |last=Munoz |first=Carlos |arxiv=1701.05259 |title=Models of Supersymmetry for Dark Matter |journal=EPJ Web of Conferences |volume=136 |pages=01002 |date=2017-01-18 |bibcode=2017EPJWC.13601002M |doi=10.1051/epjconf/201713601002 |s2cid=55199323 }}</ref>

Nevertheless, {{as of|2018|lc=y}}, experiments have yet to provide evidence for the existence of supersymmetric particles. If supersymmetry were a true symmetry of nature, then it must be a broken symmetry, and the energy of symmetry breaking must be higher than those achievable by present-day experiments.{{r|peskin|zee|page1=797|page2=443}}

====Other spacetimes====
The {{math|''ϕ''<sup>4</sup>}} theory, QED, QCD, as well as the whole Standard Model all assume a (3+1)-dimensional [[Minkowski space]] (3 spatial and 1 time dimensions) as the background on which the quantum fields are defined. However, QFT ''a priori'' imposes no restriction on the number of dimensions nor the geometry of spacetime.

In [[condensed matter physics]], QFT is used to describe [[two-dimensional electron gas|(2+1)-dimensional electron gases]].<ref>{{cite book |last1=Morandi |first1=G. |last2=Sodano |first2=P. |last3=Tagliacozzo |first3=A. |last4=Tognetti |first4=V. |date=2000 |title=Field Theories for Low-Dimensional Condensed Matter Systems |url=https://www.springer.com/us/book/9783540671770 |publisher=Springer |isbn=978-3-662-04273-1 }}</ref> In [[high-energy physics]], [[string theory]] is a type of (1+1)-dimensional QFT,{{r|zee|page1=452}}<ref name="polchinski1" /> while [[Kaluza–Klein theory]] uses gravity in [[extra dimensions]] to produce gauge theories in lower dimensions.{{r|zee|page1=428–429}}

In Minkowski space, the flat [[metric tensor (general relativity)|metric]] {{math|''η<sub>μν</sub>''}} is used to [[raising and lowering indices|raise and lower]] spacetime indices in the Lagrangian, ''e.g.''
:<math>A_\mu A^\mu = \eta_{\mu\nu} A^\mu A^\nu,\quad \partial_\mu\phi \partial^\mu\phi = \eta^{\mu\nu}\partial_\mu\phi \partial_\nu\phi,</math>
where {{math|''η<sup>μν</sup>''}} is the inverse of {{math|''η<sub>μν</sub>''}} satisfying {{math|''η<sup>μρ</sup>η<sub>ρν</sub>'' {{=}} ''δ<sup>μ</sup><sub>ν</sub>''}}. 
For [[quantum field theory in curved spacetime|QFTs in curved spacetime]] on the other hand, a general metric (such as the [[Schwarzschild metric]] describing a [[black hole]]) is used:
:<math>A_\mu A^\mu = g_{\mu\nu} A^\mu A^\nu,\quad \partial_\mu\phi \partial^\mu\phi = g^{\mu\nu}\partial_\mu\phi \partial_\nu\phi,</math>
where {{math|''g<sup>μν</sup>''}} is the inverse of {{math|''g<sub>μν</sub>''}}. 
For a real scalar field, the Lagrangian density in a general spacetime background is
:<math>\mathcal{L} = \sqrt{|g|}\left(\frac 12 g^{\mu\nu} \nabla_\mu\phi \nabla_\nu\phi - \frac 12 m^2\phi^2\right),</math>
where {{math|''g'' {{=}} det(''g<sub>μν</sub>'')}}, and {{math|∇<sub>''μ''</sub>}} denotes the [[covariant derivative]].<ref>{{cite book |last1=Parker |first1=Leonard E. |last2=Toms |first2=David J. |date=2009 |title=Quantum Field Theory in Curved Spacetime |url=https://archive.org/details/quantumfieldtheo00park |url-access=limited |publisher=Cambridge University Press |page=[https://archive.org/details/quantumfieldtheo00park/page/n58 43] |isbn=978-0-521-87787-9 }}</ref> The Lagrangian of a QFT, hence its calculational results and physical predictions, depends on the geometry of the spacetime background.

====Topological quantum field theory====
{{Main|Topological quantum field theory}}

The correlation functions and physical predictions of a QFT depend on the spacetime metric {{math|''g<sub>μν</sub>''}}. For a special class of QFTs called [[topological quantum field theories]] (TQFTs), all correlation functions are independent of continuous changes in the spacetime metric.<ref>{{cite arXiv |last1=Ivancevic |first1=Vladimir G. |last2=Ivancevic |first2=Tijana T. |eprint=0810.0344v5 |title=Undergraduate Lecture Notes in Topological Quantum Field Theory |class=math-th |date=2008-12-11 }}</ref>{{rp|36}} QFTs in curved spacetime generally change according to the ''geometry'' (local structure) of the spacetime background, while TQFTs are invariant under spacetime [[diffeomorphism]]s but are sensitive to the ''[[topology]]'' (global structure) of spacetime. This means that all calculational results of TQFTs are [[topological invariant]]s of the underlying spacetime. [[Chern–Simons theory]] is an example of TQFT and has been used to construct models of quantum gravity.<ref>{{cite book |last=Carlip |first=Steven |author-link=Steven Carlip |date=1998 |title=Quantum Gravity in 2+1 Dimensions |url=https://www.cambridge.org/core/books/quantum-gravity-in-21-dimensions/D2F727B6822014270F423D82501E674A |publisher=Cambridge University Press |pages=27–29 |isbn=9780511564192 |doi=10.1017/CBO9780511564192 }}</ref> Applications of TQFT include the [[fractional quantum Hall effect]] and [[topological quantum computer]]s.<ref>{{cite journal |last1=Carqueville |first1=Nils |last2=Runkel |first2=Ingo |arxiv=1705.05734 |title=Introductory lectures on topological quantum field theory |journal=Banach Center Publications |year=2018 |volume=114 |pages=9–47 |doi=10.4064/bc114-1 |s2cid=119166976 }}</ref>{{rp|1–5}} The world line trajectory of fractionalized particles (known as [[anyons]]) can form a link configuration in the spacetime,<ref>{{Cite journal |author-link=Edward Witten |first=Edward |last=Witten |title=Quantum Field Theory and the Jones Polynomial |journal=[[Communications in Mathematical Physics]] |volume=121 |issue=3 |pages=351–399 |year=1989 |mr=0990772 |bibcode = 1989CMaPh.121..351W |doi = 10.1007/BF01217730 |s2cid=14951363 |url=http://projecteuclid.org/euclid.cmp/1104178138 }}</ref> which relates the braiding statistics of anyons in physics to the
link invariants in mathematics. Topological quantum field theories (TQFTs) applicable to the frontier research of topological quantum matters include Chern-Simons-Witten gauge theories in 2+1 spacetime dimensions, other new exotic TQFTs in 3+1 spacetime dimensions and beyond.<ref>{{Cite journal |first1=Pavel|last1=Putrov |first2=Juven |last2=Wang | first3=Shing-Tung | last3=Yau    |title=Braiding Statistics and Link Invariants of Bosonic/Fermionic Topological Quantum Matter in 2+1 and 3+1 dimensions |journal=[[Annals of Physics]] |volume=384 |issue=C |pages=254–287 |year=2017|doi =10.1016/j.aop.2017.06.019|arxiv=1612.09298 |bibcode=2017AnPhy.384..254P |s2cid=119578849 }}</ref>

===Perturbative and non-perturbative methods===
Using [[perturbation theory (quantum mechanics)|perturbation theory]], the total effect of a small interaction term can be approximated order by order by a series expansion in the number of [[virtual particle]]s participating in the interaction. Every term in the expansion may be understood as one possible way for (physical) particles to interact with each other via virtual particles, expressed visually using a [[Feynman diagram]]. The [[electromagnetic force]] between two electrons in QED is represented (to first order in perturbation theory) by the propagation of a virtual photon. In a similar manner, the [[W and Z bosons]] carry the weak interaction, while [[gluon]]s carry the strong interaction. The interpretation of an interaction as a sum of intermediate states involving the exchange of various virtual particles only makes sense in the framework of perturbation theory. In contrast, non-perturbative methods in QFT treat the interacting Lagrangian as a whole without any series expansion. Instead of particles that carry interactions, these methods have spawned such concepts as [['t Hooft–Polyakov monopole]], [[domain wall]], [[flux tube]], and [[instanton]].<ref name="shifman">{{cite book |last=Shifman |first=M. |author-link=Mikhail Shifman |date=2012 |title=Advanced Topics in Quantum Field Theory |publisher=Cambridge University Press |isbn=978-0-521-19084-8 }}</ref> Examples of QFTs that are completely solvable non-perturbatively include [[Minimal model (physics)|minimal models]] of [[conformal field theory]]<ref>{{cite book |last1=Di Francesco |first1=Philippe |last2=Mathieu |first2=Pierre |last3=Sénéchal |first3=David |date=1997 |title=Conformal Field Theory |publisher=Springer |isbn=978-1-4612-7475-9 |url=https://books.google.com/books?id=5u7jBwAAQBAJ }}</ref> and the [[Thirring model]].<ref>{{Cite journal |last=Thirring |first=W. |author-link=Walter Thirring |year=1958 |title=A Soluble Relativistic Field Theory? |journal=[[Annals of Physics]] |volume=3 |issue=1|pages=91–112 |bibcode=1958AnPhy...3...91T |doi=10.1016/0003-4916(58)90015-0}}</ref>

==Mathematical rigor==
In spite of its overwhelming success in particle physics and condensed matter physics, QFT itself lacks a formal mathematical foundation. For example, according to [[Haag's theorem]], there does not exist a well-defined [[interaction picture]] for QFT, which implies that [[perturbation theory (quantum mechanics)|perturbation theory]] of QFT, which underlies the entire [[Feynman diagram]] method, is fundamentally ill-defined.<ref>{{cite journal |last=Haag |first=Rudolf |author-link=Rudolf Haag |date=1955 |title=On Quantum Field Theories |url=http://cdsweb.cern.ch/record/212242/files/p1.pdf |journal=Dan Mat Fys Medd |volume=29 |issue=12 }}</ref>

However, ''perturbative'' quantum field theory, which only requires that quantities be computable as a formal power series without any convergence requirements, can be given a rigorous mathematical treatment. In particular, [[Kevin Costello]]'s monograph ''Renormalization and Effective Field Theory''<ref name=costello>Kevin Costello, ''Renormalization and Effective Field Theory'', Mathematical Surveys and Monographs Volume 170, American Mathematical Society, 2011, {{ISBN|978-0-8218-5288-0}}</ref> provides a rigorous formulation of perturbative renormalization that combines both the effective-field theory approaches of [[Leo Kadanoff|Kadanoff]], [[Kenneth G. Wilson|Wilson]], and [[Joseph Polchinski|Polchinski]], together with the [[Batalin-Vilkovisky]] approach to quantizing gauge theories. Furthermore,  perturbative path-integral methods, typically understood as formal computational methods inspired from finite-dimensional integration theory,<ref name=ren>Gerald B. Folland, ''Quantum Field Theory: A Tourist Guide for Mathematicians'', Mathematical Surveys and Monographs Volume 149, American Mathematical Society, 2008, {{ISBN|0821847058}} | chapter=8</ref> can be given a sound mathematical interpretation from their finite-dimensional analogues.<ref name="nguyen">{{Cite journal |last=Nguyen |first=Timothy |arxiv=1505.04809 |title=The perturbative approach to path integrals: A succinct mathematical treatment |journal=J. Math. Phys.|volume=57|year=2016 |issue=9 |page=092301 |doi=10.1063/1.4962800|bibcode=2016JMP....57i2301N |s2cid=54813572 }}</ref>

Since the 1950s,<ref name="buchholz">{{Cite journal |last=Buchholz |first=Detlev |author-link=Detlev Buchholz |arxiv=hep-th/9811233 |title=Current Trends in Axiomatic Quantum Field Theory |journal=Quantum Field Theory |series=Lecture Notes in Physics |volume=558 |pages=43–64 |year=2000 |doi=10.1007/3-540-44482-3_4 |bibcode=2000LNP...558...43B |isbn=978-3-540-67972-1 |s2cid=5052535 }}</ref> theoretical physicists and mathematicians have attempted to organize all QFTs into a set of [[axiom]]s, in order to establish the existence of concrete models of relativistic QFT in a mathematically rigorous way and to study their properties. This line of study is called [[constructive quantum field theory]], a subfield of [[mathematical physics]],<ref name="summers">{{cite arXiv |last=Summers |first=Stephen J. |eprint=1203.3991v2 |title=A Perspective on Constructive Quantum Field Theory |class=math-ph |date=2016-03-31 }}</ref>{{rp|2}} which has led to such results as [[CPT theorem]], [[spin–statistics theorem]], and [[Goldstone's theorem]],<ref name="buchholz" /> and also to mathematically rigorous constructions of many interacting QFTs in two and three spacetime dimensions, e.g. two-dimensional scalar field theories with arbitrary polynomial interactions,<ref name="Simon">{{cite book|last=Simon|first=Barry|title=The P(phi)_2 Euclidean (quantum) field theory|publisher=Princeton University Press|year=1974|isbn=0-691-08144-1|publication-place=Princeton, New Jersey|page=|oclc=905864308}}</ref> the three-dimensional scalar field theories with a quartic interaction, etc.<ref name="Glimm1987">{{cite book|last1=Glimm|first1=James|title=Quantum Physics : a Functional Integral Point of View|last2=Jaffe|first2=Arthur|publisher=Springer New York|year=1987|isbn=978-1-4612-4728-9|publication-place=New York, NY|page=|oclc=852790676}}</ref>

Compared to ordinary QFT, [[topological quantum field theory]] and [[conformal field theory]] are better supported mathematically — both can be classified in the framework of [[representation (mathematics)|representation]]s of [[cobordism]]s.<ref>{{cite arXiv |last1=Sati |first1=Hisham |last2=Schreiber |first2=Urs |author-link2=Urs Schreiber |eprint=1109.0955v2 |title=Survey of mathematical foundations of QFT and perturbative string theory |class=math-ph |date=2012-01-06 }}</ref>

[[Algebraic quantum field theory]] is another approach to the axiomatization of QFT, in which the fundamental objects are local operators and the algebraic relations between them. Axiomatic systems following this approach include [[Wightman axioms]] and [[Haag–Kastler axioms]].{{r|summers|page1=2–3}} One way to construct theories satisfying Wightman axioms is to use [[Osterwalder–Schrader axioms]], which give the necessary and sufficient conditions for a real time theory to be obtained from an [[imaginary time]] theory by [[analytic continuation]] ([[Wick rotation]]).{{r|summers|page1=10}}

[[Yang–Mills existence and mass gap]], one of the [[Millennium Prize Problems]], concerns the well-defined existence of [[Yang–Mills theory|Yang–Mills theories]] as set out by the above axioms. The full problem statement is as follows.<ref>{{cite web |url=http://www.claymath.org/sites/default/files/yangmills.pdf |title=Quantum Yang–Mills Theory |last1=Jaffe |first1=Arthur |last2=Witten |first2=Edward |author-link1=Arthur Jaffe |author-link2=Edward Witten |publisher=[[Clay Mathematics Institute]] |access-date=2018-07-18}}</ref>
{{Blockquote|
Prove that for any [[compact space|compact]] [[simple group|simple]] [[gauge group]] {{math|''G''}}, a non-trivial quantum Yang–Mills theory exists on <math>\mathbb{R}^4</math> and has a [[mass gap]] {{math|Δ > 0}}. Existence includes establishing axiomatic properties at least as strong as those cited in {{Harvtxt|Streater|Wightman|1964}}, {{Harvtxt|Osterwalder|Schrader|1973}} and {{Harvtxt|Osterwalder|Schrader|1975}}.
}}

==See also==
{{Portal|Mathematics|Physics}}
{{cols|colwidth=21em}}
* [[Abraham–Lorentz force]]
* [[AdS/CFT correspondence]]
* [[Axiomatic quantum field theory]]
* [[Introduction to quantum mechanics]]
* [[Common integrals in quantum field theory]]
* [[Conformal field theory]]
* [[Constructive quantum field theory]]
* [[Dirac's equation]]
* [[Form factor (quantum field theory)]]
* [[Feynman diagram]]
* [[Green–Kubo relations]]
* [[Green's function (many-body theory)]]
* [[Group field theory]]
* [[Lattice field theory]]
* [[List of quantum field theories]]
* [[Local quantum field theory]]
* [[Noncommutative quantum field theory]]
* [[Quantization (physics)|Quantization]] of a [[Field (physics)|field]]
* [[Quantum electrodynamics]]
* [[Quantum field theory in curved spacetime]]
* [[Quantum chromodynamics]]
* [[Quantum flavordynamics]]
* [[Quantum hadrodynamics]]
* [[Quantum hydrodynamics]]
* [[Quantum triviality]]
* [[Relation between Schrödinger's equation and the path integral formulation of quantum mechanics]]
* [[Relationship between string theory and quantum field theory]]
* [[Schwinger–Dyson equation]]
* [[Static forces and virtual-particle exchange]]
* [[Symmetry in quantum mechanics]]
* [[Theoretical and experimental justification for the Schrödinger equation]]
* [[Topological quantum field theory]]
* [[Ward–Takahashi identity]]
* [[Wheeler–Feynman absorber theory]]
* [[Wigner's classification]]
* [[Wigner's theorem]]
{{colend}}

==References==
{{Reflist}}
;Bibliography
*{{cite book |last1=Streater |first1=R. |last2=Wightman |first2=A. |title=PCT, Spin and Statistics and all That|url=https://archive.org/details/pctspinstatistic0000stre |url-access=registration |publisher=W. A. Benjamin|year= 1964}}
*{{cite journal |last1=Osterwalder |first1=K. |last2=Schrader |first2=R. |title=Axioms for Euclidean Green's functions |journal=[[Communications in Mathematical Physics]] |volume=31 |issue=2 |pages=83–112 |year=1973|doi=10.1007/BF01645738 |bibcode = 1973CMaPh..31...83O |s2cid=189829853 |url=http://projecteuclid.org/euclid.cmp/1103858969 }}
*{{cite journal |last1=Osterwalder |first1=K. |last2=Schrader |first2=R. |title=Axioms for Euclidean Green's functions II |journal=[[Communications in Mathematical Physics]] |volume=42 |issue=3 |pages=281–305 |year=1975|doi=10.1007/BF01608978 |bibcode = 1975CMaPh..42..281O |s2cid=119389461 |url=http://projecteuclid.org/euclid.cmp/1103899050 }}

==Further reading==
; General readers
* {{cite book|
last1=Pais|first1=A.|author-link1=Abraham Pais
|title=Inward Bound: Of Matter and Forces in the Physical World
|edition=reprint
|year=1994
|orig-year=1986
|publisher=[[Oxford University Press]]
|location=Oxford, New York, Toronto
|isbn=978-0198519973
}}
* {{cite book
|last=Schweber
|first=S. S.
|author-link=S. S. Schweber
|title=QED and the Men Who Made It: Dyson, Feynman, Schwinger, and Tomonaga
|year=1994
|isbn=9780691033273
|url=https://archive.org/details/qedmenwhomadeitd0000schw
|publisher=[[Princeton University Press]]
|url-access=registration
}}
* {{cite book
 |last=Feynman
 |first=R.P.
 |author-link=Richard Feynman
 |year=2001
 |orig-year=1964
 |title=The Character of Physical Law
 |publisher=[[MIT Press]]
 |isbn=978-0-262-56003-0
 |url-access=registration
 |url=https://archive.org/details/characterofphysi0000feyn_u5j3
 }}
* {{cite book |last=Feynman |first=R.P.
 |year=2006 |orig-year=1985
 |title=QED: The Strange Theory of Light and Matter
 |publisher=Princeton University Press
 |isbn=978-0-691-12575-6
}}
* {{cite book |last=Gribbin |first=J. |author-link=John Gribbin
 |year=1998
 |title=Q is for Quantum: Particle Physics from A to Z
 |publisher=[[Weidenfeld & Nicolson]]
 |isbn=978-0-297-81752-9
}}

; Introductory texts

* {{cite book |last=McMahon |first=D. 
 |year=2008
 |title=Quantum Field Theory
 |publisher=[[McGraw-Hill]]
 |isbn=978-0-07-154382-8
}}
* {{cite book |last1=Bogolyubov |first1=N. |author-link1=Nikolay Bogolyubov
 |last2=Shirkov |first2=D. |author-link2=Dmitry Shirkov
 |year=1982
 |title=Quantum Fields
 |publisher=[[Benjamin Cummings]]
 |isbn=978-0-8053-0983-6
}}
* {{cite book |last=Frampton |first=P.H. |author-link=Paul Frampton
 |year=2000
 |title=Gauge Field Theories
 |edition=2nd
 |series=Frontiers in Physics
 |publisher=[[John Wiley & Sons|Wiley]]
}}; {{cite book|title=2008, 3rd edition|url=https://books.google.com/books?id=AwhkM6hVj-wC|isbn=3527408355}}
* {{cite book |last1=Greiner |first1=W. |author-link=Walter Greiner |last2=Müller |first2=B.|author-link2=Berndt Müller
 |year=2000
 |title=Gauge Theory of Weak Interactions
 |publisher=[[Springer Science+Business Media|Springer]]
 |isbn=978-3-540-67672-0
}}
* {{cite book |last1=Itzykson |first1=C. |author-link=Claude Itzykson |last2=Zuber |first2=J.-B.|author-link2=Jean-Bernard Zuber
 |year=1980
 |title=Quantum Field Theory
 |url=https://archive.org/details/quantumfieldtheo0000itzy
 |url-access=registration
 |publisher=[[McGraw-Hill]]
 |isbn=978-0-07-032071-0
}}
* {{cite book |last=Kane |first=G.L. |author-link=Gordon L. Kane
 |year=1987
 |title=Modern Elementary Particle Physics
 |publisher=[[Perseus Books Group|Perseus Group]]
 |isbn=978-0-201-11749-3
}}
* {{cite book |last1=Kleinert |first1=H. |author-link=Hagen Kleinert
 |last2=Schulte-Frohlinde |first2=Verena
 |year=2001
 |title=Critical Properties of &phi;<sup>4</sup>-Theories
 |url=http://users.physik.fu-berlin.de/~kleinert/re.html#B6
 |publisher=[[World Scientific]]
 |isbn=978-981-02-4658-7
}}
* {{cite book |last=Kleinert |first=H.
 |year=2008
 |title=Multivalued Fields in Condensed Matter, Electrodynamics, and Gravitation
 |url=http://users.physik.fu-berlin.de/~kleinert/public_html/kleiner_reb11/psfiles/mvf.pdf
 |publisher=World Scientific
 |isbn=978-981-279-170-2
}}
* Lancaster, T., & Blundell, S. J. (2014). [https://books.google.com/books?id=Y-0kAwAAQBAJ ''Quantum field theory for the gifted amateur''.] OUP Oxford. {{ISBN|9780199699339}}
* {{cite book |last=Loudon |first=R. |author-link=Rodney Loudon
 |year=1983
 |title=The Quantum Theory of Light
 |publisher=Oxford University Press
 |isbn=978-0-19-851155-7
}}
* {{cite book |last1=Mandl |first1=F. |author-link=Franz Mandl (physicist) |last2=Shaw |first2=G.
 |year=1993
 |title=Quantum Field Theory
 |publisher=[[John Wiley & Sons]]
 |isbn=978-0-471-94186-6 
}}
* {{cite book |last=Ryder |first=L.H. |author-link=Lewis Ryder
 |year=1985
 |title=Quantum Field Theory
 |url=https://books.google.com/books?id=nnuW_kVJ500C
 |publisher=[[Cambridge University Press]]
 |isbn=978-0-521-33859-2
}}
* {{cite book
 |last=Schwartz
 |first=M.D.
 |year=2014
 |title=Quantum Field Theory and the Standard Model
 |url=http://www.schwartzqft.com
 |publisher=Cambridge University Press
 |isbn=978-1107034730
 |access-date=2020-05-13
 |archive-url=https://web.archive.org/web/20180322014256/http://schwartzqft.com/
 |archive-date=2018-03-22
 |url-status=dead
 }}
* {{cite book |last=Ynduráin |first=F.J. |author-link=Francisco José Ynduráin
 |year=1996
 |title=Relativistic Quantum Mechanics and Introduction to Field Theory
 |edition=1st
 |publisher=Springer
 |doi=10.1007/978-3-642-61057-8 |isbn=978-3-540-60453-2
|bibcode=1996rqmi.book.....Y }}
* {{cite book|last1=Greiner|first1=W.|author-link1=Walter Greiner
|last2=Reinhardt|first2=J.
|year=1996
|title=Field Quantization
|url=https://archive.org/details/fieldquantizatio0000grei|url-access=registration|publisher=Springer
|isbn=978-3-540-59179-5
}}
* {{cite book |last1=Peskin |first1=M. |author-link=Michael Peskin |last2=Schroeder |first2=D.
 |year=1995
 |title=An Introduction to Quantum Field Theory
 |url=https://books.google.com/books?id=i35LALN0GosC
 |publisher=[[Westview Press]]
 |isbn=978-0-201-50397-5
}}
* {{cite book|last=Scharf|first=Günter
|title=Finite Quantum Electrodynamics: The Causal Approach
|edition=third|year=2014
|orig-year=1989
|isbn=978-0486492735
|publisher=Dover Publications
}}
* {{cite book |last1=Srednicki |first1=M.
 |title=Quantum Field Theory
 |publisher=[[Cambridge University Press]]
 |year=2007
 |isbn=978-0521-8644-97
 |url=http://www.cambridge.org/us/catalogue/catalogue.asp?isbn=0521864496
}}
* {{cite web|last1=Tong |first1=David |author-link=David Tong (physicist)
|title=Lectures on Quantum Field Theory
|year=2015
|url=http://www.damtp.cam.ac.uk/user/tong/qft.html
|access-date=2016-02-09
}}
* {{cite book
 |last=Williams
 |first=A.G.
 |author-link=
 |title=Introduction to Quantum Field Theory: Classical Mechanics to Gauge Field Theories
 |volume=
 |publisher=[[Cambridge University Press]]
 |year=2022
 |isbn=978-1108470902
 |url-access=
 |url=
 }}
* {{cite book
|last1=Zee
|first1=Anthony
|author-link=Anthony Zee
|title=Quantum Field Theory in a Nutshell
|edition=2nd
|year=2010
|isbn=978-0691140346
|publisher=[[Princeton University Press]]
|url-access=registration
|url=https://archive.org/details/isbn_9780691140346
}}

; Advanced texts

* {{cite book |last=Brown
 |first=Lowell S.
 |author-link=Lowell S. Brown
 |title=Quantum Field Theory
 |publisher=[[Cambridge University Press]]
 |year=1994
 |isbn=978-0-521-46946-3 
}}
* {{cite book |last1=Bogoliubov |first1=N.
 |last2=Logunov |first2=A.A. |author-link2=Anatoly Logunov
 |last3=Oksak |first3=A.I.
 |last4=Todorov |first4=I.T.
 |year=1990
 |title=General Principles of Quantum Field Theory
 |publisher=[[Kluwer Academic Publishers]]
 |isbn=978-0-7923-0540-8
}}
* {{cite book
 |last=Weinberg
 |first=S.
 |author-link=Steven Weinberg
 |title=The Quantum Theory of Fields
 |volume=1
 |publisher=[[Cambridge University Press]]
 |year=1995
 |isbn=978-0521550017
 |url-access=registration
 |url=https://archive.org/details/quantumtheoryoff00stev
 }}

==External links==
*{{Commons category-inline}}
{{sister project|project=Wikiversity
|text=[[v:Quantum mechanics/Quantum field theory on a violin string|One-dimensional quantum field theory on Wikiversity]]}}
* {{springer|title=Quantum field theory|id=p/q076300}}
* ''[[Stanford Encyclopedia of Philosophy]]'': "[http://plato.stanford.edu/entries/quantum-field-theory/ Quantum Field Theory]", by Meinard Kuhlmann.
* Siegel, Warren, 2005. ''[http://insti.physics.sunysb.edu/%7Esiegel/errata.html Fields.]'' {{arxiv|hep-th/9912205}}.
* [http://www.nat.vu.nl/~mulders/QFT-0.pdf Quantum Field Theory] by P. J. Mulders

{{Quantum field theories}}
{{Quantum mechanics topics}}
{{quantum gravity}}
{{Physics-footer}}
{{Standard model of physics}}

{{Authority control}}

{{DEFAULTSORT:Quantum Field Theory}}
[[Category:Quantum field theory| ]]
[[Category:Quantum mechanics]]
[[Category:Mathematical physics]]
