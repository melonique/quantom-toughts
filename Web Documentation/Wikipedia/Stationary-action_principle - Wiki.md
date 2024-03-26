{{Short description|Variational principle in physics}}
{{classical mechanics}}
The '''stationary-action principle''' – also known as the '''principle of least action''' – is a [[variational principle]] that, when applied to the ''[[action (physics)|action]]'' of a [[mechanics|mechanical]] system, yields the [[equations of motion]] for that system. The principle states that the trajectories (i.e. the solutions of the equations of motion) are ''[[Stationary point|stationary points]]'' of the system's ''action functional''.<ref name=":0">[https://feynmanlectures.caltech.edu/II_19.html The Feynman Lectures on Physics Vol. II Ch. 19: The Principle of Least Action]</ref> 

The term "least action" is often used<ref name=":0"/> by physicists even though the principle ''has no general minimality requirement''.<ref name="Stehle">{{cite encyclopedia |last1=Stehle |first1=Philip M. |title=Least-action principle |date=1993|encyclopedia=McGraw-Hill Encyclopaedia of Physics |publisher=McGraw-Hill |location=New York |editor=Parker, S. P.|isbn=0-07-051400-3|page=670 |edition=2nd |url=https://archive.org/details/mcgrawhillencycl1993park/page/670/mode/2up}}</ref> Historically the principle was known as "least action" and Feynman adopted this name over "Hamilton's principle" when he adapted it for quantum mechanics.<ref>{{Cite journal |last=Moore |first=Thomas A. |date=2004-04-01 |title=Getting the most action out of least action: A proposal |url=https://pubs.aip.org/ajp/article/72/4/522/1056045/Getting-the-most-action-out-of-least-action-A |journal=American Journal of Physics |language=en |volume=72 |issue=4 |pages=522–527 |doi=10.1119/1.1646133 |bibcode=2004AmJPh..72..522M |issn=0002-9505}}</ref>

The principle can be used to derive [[Newtonian mechanics|Newtonian]], [[Lagrangian mechanics|Lagrangian]] and [[Hamiltonian mechanics|Hamiltonian]] [[equations of motion]], and even [[general relativity]], as well as [[Classical electromagnetism|classical electrodynamics]] and [[quantum field theory]]. In these cases, a different action must be minimized or maximized. For relativity, it is the [[Einstein–Hilbert action]]. For quantum field theory, it involves the [[path integral formulation]].

The classical mechanics and electromagnetic expressions are a consequence of quantum mechanics. The stationary action method helped in the development of quantum mechanics.<ref>[[Richard Feynman]], ''[[The Character of Physical Law]]''.</ref> 

The principle remains central in [[modern physics]] and [[mathematics]], being applied in [[thermodynamics]],<ref>{{cite journal |doi=10.1016/j.aop.2008.04.007 |title=Thermodynamics based on the principle of least abbreviated action: Entropy production in a network of coupled oscillators |journal=Annals of Physics |volume=323 |issue=8 |pages=1844–58 |year=2008 |last1=García-Morales |first1=Vladimir |last2=Pellicer |first2=Julio |last3=Manzanares |first3=José A. |bibcode=2008AnPhy.323.1844G |arxiv=cond-mat/0602186 |s2cid=118464686 }}</ref><ref>{{Cite journal |last1=Gay-Balmaz |first1=François |last2=Yoshimura |first2=Hiroaki |year=2018 |title=From Lagrangian Mechanics to Nonequilibrium Thermodynamics: A Variational Perspective |journal=Entropy |language=en |volume=21 |issue=1 |page=8 |doi=10.3390/e21010008 |pmid=33266724 |pmc=7514189 |arxiv=1904.03738 |bibcode=2018Entrp..21....8G |issn=1099-4300 |doi-access=free }}</ref><ref>{{Cite journal |last=Biot |first=Maurice Anthony |date=1975 |title=A virtual dissipation principle and Lagrangian equations in non-linear irreversible thermodynamics |journal=Bulletin de la Classe des sciences |volume=61 |issue=1 |pages=6–30 |doi=10.3406/barb.1975.57878 |issn=0001-4141}}</ref> [[fluid mechanics]],<ref>{{Cite journal| doi = 10.4249/scholarpedia.8291|title = Principle of least action|year = 2009|last1 = Gray|first1 = Chris|journal = Scholarpedia|volume = 4|issue = 12|page = 8291|bibcode = 2009SchpJ...4.8291G| doi-access = free}}</ref> the [[theory of relativity]], [[quantum mechanics]],<ref>{{citation |bibcode=1942PhDT.........5F |title=The Principle of Least Action in Quantum Mechanics |last1=Feynman |first1=Richard Phillips |year=1942 |type=thesis }}</ref> [[particle physics]], and [[string theory]]<ref>{{Cite web |url=http://www.damtp.cam.ac.uk/user/db275/LeastAction.pdf |title=Principle of Least Action – damtp |access-date=2016-07-18 |archive-url=https://web.archive.org/web/20151010195059/http://www.damtp.cam.ac.uk/user/db275/LeastAction.pdf |archive-date=2015-10-10 }}</ref> and is a focus of modern mathematical investigation in [[Morse theory]]. [[Maupertuis' principle]] and [[Hamilton's principle]] exemplify the principle of stationary action.

Scholars often credit [[Pierre Louis Maupertuis]] for formulating the principle of least action because he wrote about it in 1744<ref name="mau44">P.L.M. de Maupertuis, ''[[s:fr:Accord de différentes loix de la nature qui avoient jusqu'ici paru incompatibles|Accord de différentes lois de la nature qui avaient jusqu'ici paru incompatibles.]]'' (1744) Mém. As. Sc. Paris p. 417. ([[s:Accord between different laws of Nature that seemed incompatible|English translation]])</ref> and 1746.<ref name="mau46">P.L.M. de Maupertuis, ''[[s:fr:Les loix du mouvement et du repos déduites d'un principe metaphysique|Le lois de mouvement et du repos, déduites d'un principe de métaphysique.]]'' (1746) Mém. Ac. Berlin, p. 267.([[s:Derivation of the laws of motion and equilibrium from a metaphysical principle|English translation]])</ref>

== General statement ==
{{See also|Hamilton's principle}}[[File:Least action principle.svg|250px|thumb|As the system evolves, '''q''' traces a path through [[configuration space (physics)|configuration space]] (only some are shown). The path taken by the system (red) has a stationary action (''δS'' = 0) under small changes in the configuration of the system (''δ'''''q''').<ref name=penrose>{{cite book |author=R. Penrose| title=[[The Road to Reality]]| publisher= Vintage books| year=2007 | page = 474|isbn=978-0-679-77631-4}}</ref>]]

The ''[[action (physics)|action]]'', denoted <math> \mathcal{S} </math>, of a physical system is defined as the [[integral (mathematics)|integral]] of the [[Lagrangian mechanics|Lagrangian]] ''L'' between two instants of [[time in physics|time]] {{math|''t''<sub>1</sub>}} and {{math|''t''<sub>2</sub>}} – technically a [[functional (mathematics)|functional]] of the {{mvar|N}} [[generalized coordinates]] {{math|1='''q''' = (''q''<sub>1</sub>, ''q''<sub>2</sub>, ... , ''q<sub>N</sub>'')}} which are functions of time and define the [[Configuration space (physics)|configuration]] of the system:

<math display="block"> \mathbf{q} : \mathbf{R} \to \mathbf{R}^N </math>
<math display="block"> \mathcal{S}[\mathbf{q}, t_1, t_2] = \int_{t_1}^{t_2} L(\mathbf{q}(t),\mathbf{\dot{q}}(t), t) dt </math>
where the dot denotes the [[time derivative]], and {{mvar|t}} is time.

Mathematically the principle is<ref>Encyclopaedia of Physics (2nd Edition), [[Rita G. Lerner|R.G. Lerner]], G.L. Trigg, VHC publishers, 1991, ISBN (Verlagsgesellschaft) 3-527-26954-1, ISBN (VHC Inc.) 0-89573-752-3</ref><ref name="Analytical Mechanics 2008">Analytical Mechanics, L.N. Hand, J.D. Finch, Cambridge University Press, 2008, {{ISBN|978-0-521-57572-0}}</ref>
<math display="block"> \delta \mathcal{S} = 0 ,</math>
where ''δ'' (lowercase Greek [[Delta (letter)|delta]]) means a ''small'' change. In words this reads:<ref name=penrose/>
{{block indent | em = 1.5 | style=font-style:italic; | text = The path taken by the system between times {{math|''t''<sub>1</sub>}} and {{math|''t''<sub>2</sub>}} and configurations q<sub>1</sub> and q<sub>2</sub> is the one for which the '''action''' is '''stationary (i.e., not changing)''' to '''first order'''.}}
Stationary action is not always a minimum, despite the historical name of least action.<ref>{{cite encyclopedia |last1=Goodman |first1=Bernard |title=Action |date=1993|encyclopedia=McGraw-Hill Encyclopaedia of Physics |publisher=McGraw-Hill |location=New York |editor=Parker, S. P.|isbn=0-07-051400-3|page=22 |edition=2nd |url=https://archive.org/details/mcgrawhillencycl1993park/page/22/mode/2up}}</ref><ref name=":0" />{{rp|19-6}} It is a minimum principle for sufficiently short, finite segments in the path of a finite-dimensional system.<ref name="Stehle"/>

In applications the statement and definition of action are taken together in "[[Hamilton's principle]]", written in modern form as:<ref>Classical Mechanics, T.W.B. Kibble, European Physics Series, McGraw-Hill (UK), 1973, {{ISBN|0-07-084018-0}}</ref>
<math display="block"> \delta \int_{t_1}^{t_2} L(\mathbf{q}, \mathbf{\dot{q}},t) dt = 0 .</math>

The action and Lagrangian both contain the dynamics of the system for all times. The term "path" simply refers to a curve traced out by the system in terms of the coordinates in the [[Configuration space (physics)|configuration space]], i.e. the curve {{math|'''q'''(''t'')}}, parameterized by time (see also [[parametric equation]] for this concept).

== History ==
{{Main | History of variational principles in physics }}
The action principle is preceded by earlier ideas in [[optics]]. In [[ancient Greece]], [[Euclid]] wrote in his ''Catoptrica'' that, for the path of light reflecting from a mirror, the [[angle of incidence (optics)|angle of incidence]] equals the [[angle of reflection]].<ref>{{cite journal |year=1966 |title=Optics from Euclid to Huygens |journal=Applied Optics |volume=5 |issue=9 |pages=1383–93 |bibcode=1966ApOpt...5.1383H |doi=10.1364/AO.5.001383 |pmid=20057555 |quote=In ''Catoptrics'' the law of reflection is stated, namely that incoming and outgoing rays form the same angle with the surface normal. |author-last=Helzberger |author-first=Max}}</ref> [[Hero of Alexandria]] later showed that this path was the shortest length and least time.<ref>{{cite book |last=Kline |first=Morris |url=https://archive.org/details/mathematicalthou0000unse |title=Mathematical Thought from Ancient to Modern Times |date=1972 |publisher=Oxford University Press |isbn=0-19-501496-0 |location=New York |pages=[https://archive.org/details/mathematicalthou0000unse/page/167 167]–68 |url-access=registration}}</ref>

Building on the early work of  [[Pierre Louis Maupertuis]], [[Leonhard Euler]], and [[Joseph Louis Lagrange]] defining versions of '''principle of least action''',<ref name="Kline1972">{{cite book|last=Kline|first=Morris|title=Mathematical Thought from Ancient to Modern Times|url=https://archive.org/details/mathematicalthou0000unse|url-access=registration|publisher=Oxford University Press|location=New York|year=1972|pages= [https://archive.org/details/mathematicalthou0000unse/page/167 167]–168|isbn=0-19-501496-0}}</ref>{{rp|580}}
[[William Rowan Hamilton]] and in tandem [[Carl Gustav Jacobi]] developed a variational form for classical mechanics known as the [[Hamilton–Jacobi equation]].<ref name="NakaneFraser">Nakane, Michiyo, and Craig G. Fraser. "The Early History of Hamilton‐Jacobi Dynamics 1834–1837." Centaurus 44.3‐4 (2002): 161-227.</ref>{{rp|201}}

In 1915 [[David Hilbert]] applied the variational principle to derive [[Albert Einstein]]'s equations of [[general relativity]].<ref name="MehraEinsteinHilbert">{{Cite book |last=Mehra |first=Jagdish |chapter=Einstein, Hilbert, and the Theory of Gravitation |editor-last=Mehra |editor-first=Jagdish |title=The physicist's conception of nature |date=1987 |publisher=Reidel |isbn=978-90-277-2536-3 |edition=Reprint |location=Dordrecht}}</ref> 

In 1933, the physicist [[Paul Dirac]] demonstrated how this principle can be used in quantum calculations by discerning the [[Path integral formulation#Quantum action principle|quantum mechanical underpinning]] of the principle in the [[Interference (wave propagation)#Quantum interference|quantum interference]] of amplitudes.<ref>{{cite journal |last=Dirac |first=Paul A. M. |author-link=Paul Dirac |year=1933 |title=The Lagrangian in Quantum Mechanics |url=http://www.hep.anl.gov/czachos/soysoy/Dirac33.pdf |journal=Physikalische Zeitschrift der Sowjetunion |volume=3 |issue=1 |pages=64–72}}</ref> Subsequently [[Julian Schwinger]] and [[Richard Feynman]] independently applied this principle in quantum electrodynamics.<ref>R. Feynman, Quantum Mechanics and Path Integrals, McGraw-Hill (1965), {{ISBN|0-07-020650-3}}</ref><ref>J. S. Schwinger, Quantum Kinematics and Dynamics, W. A. Benjamin (1970), {{ISBN|0-7382-0303-3}}</ref>

== Disputes about possible teleological aspects ==

The mathematical equivalence of the [[differential equation|differential]] [[equations of motion]] and their [[integral equation|integral]]
counterpart has important philosophical implications.  The differential equations are statements about quantities localized to a single point in space or single moment of time.  For example, [[Newton's laws of motion|Newton's second law]]
<math display="block">\mathbf{F} = m\mathbf{a}</math>
states that the ''instantaneous'' force '''F''' applied to a mass ''m'' produces an acceleration '''a''' at the same ''instant''.  By contrast, the action principle is not localized to a point; rather, it involves integrals over an interval of time and (for fields) an extended region of space.  Moreover, in the usual formulation of [[classical physics|classical]] action principles, the initial and final states of the system are fixed, e.g.,

{{block indent | em = 1.5 | text = ''Given that the particle begins at position x<sub>1</sub> at time t<sub>1</sub> and ends at position x<sub>2</sub> at time t<sub>2</sub>, the physical trajectory that connects these two endpoints is an [[extremum]] of the action integral.''}}

In particular, the fixing of the ''final'' state has been interpreted as giving the action principle a [[teleology|teleological character]] which has been controversial historically. However, according to {{ill|Wolfgang Yourgrau|de}} and [[Stanley Mandelstam]], ''the teleological approach... presupposes that the variational principles themselves have mathematical characteristics which they ''de facto'' do not possess''<ref name="Stöltzner1994">{{cite encyclopedia|last=Stöltzner|first=Michael|encyclopedia=Inside Versus Outside |editor1 = H. Atmanspacher | editor2 = G. J. Dalenoort |title = Action Principles and Teleology|series=Springer Series in Synergetics|year=1994|volume=63|location=Berlin|publisher=Springer|isbn=978-3-642-48649-4|pages=33–62 |doi=10.1007/978-3-642-48647-0_3}}</ref> In addition, some critics maintain this apparent [[teleology]] occurs because of the way in which the question was asked. By specifying some but not all aspects of both the initial and final conditions (the positions but not the velocities) we are making some inferences about the initial conditions from the final conditions, and it is this "backward" inference that can be seen as a teleological explanation.

== See also ==
{{div col|colwidth=}}
* [[Action (physics)]]
* [[Path integral formulation]]
* [[Schwinger's quantum action principle]]
* [[Path of least resistance]]
* [[Analytical mechanics]]
* [[Calculus of variations]]
* [[Hamiltonian mechanics]]
* [[Lagrangian mechanics]]
* [[Occam's razor]]
* [[Variational principle]]
{{div col end}}

== Notes and references ==
{{reflist|30em}}

== Further reading ==
For an annotated bibliography, see Edwin F. Taylor who [http://www.eftaylor.com/pub/BibliogLeastAction12.pdf lists], among other things, the following books
* [[Cornelius Lanczos]], [https://books.google.com/books?id=cmPDAgAAQBAJ The Variational Principles of Mechanics] (Dover Publications, New York, 1986). {{ISBN|0-486-65067-7}}. ''The'' reference most quoted by all those who explore this field.
* [[L. D. Landau]] and [[E. M. Lifshitz]], Mechanics, [[Course of Theoretical Physics]] (Butterworth-Heinenann, 1976), 3rd ed., Vol. 1. {{ISBN|0-7506-2896-0}}. Begins with the principle of least action.
* Thomas A. Moore "Least-Action Principle" in Macmillan Encyclopedia of Physics (Simon & Schuster Macmillan, 1996), Volume 2, {{ISBN|0-02-897359-3}},  {{OCLC|35269891}}, pages 840–842.
* [[Gerald Jay Sussman]] and [[Jack Wisdom]], [http://groups.csail.mit.edu/mac/users/gjs/6946/sicm-html/ Structure and Interpretation of Classical Mechanics] (MIT Press, 2001). Begins with the principle of least action, uses modern mathematical notation, and checks the clarity and consistency of procedures by programming them in computer language.
* Dare A. Wells, Lagrangian Dynamics, Schaum's Outline Series (McGraw-Hill, 1967) {{ISBN|0-07-069258-0}}, A 350-page comprehensive "outline" of the subject.
* Robert Weinstock, Calculus of Variations, with Applications to Physics and Engineering (Dover Publications, 1974). {{ISBN|0-486-63069-2}}.  An oldie but goodie, with the formalism carefully defined before use in physics and engineering.
* Wolfgang Yourgrau and [[Stanley Mandelstam]], [https://books.google.com/books/about/Variational_Principles_in_Dynamics_and_Q.html?id=OwTyrJJXZbYC Variational Principles in Dynamics and Quantum Theory] (Dover Publications, 1979). A nice treatment that does not avoid the philosophical implications of the theory and lauds the Feynman treatment of quantum mechanics that reduces to the principle of least action in the limit of large mass.

== External links ==
* Edwin F. Taylor's [http://www.eftaylor.com/leastaction.html page]
* [http://www.eftaylor.com/software/ActionApplets/LeastAction.html Interactive explanation of the principle of least action]
* [http://www.eftaylor.com/software/ActionClockTicks/ Interactive applet to construct trajectories using principle of least action]
* {{cite book |doi=10.1007/978-3-642-28583-7_9 |chapter=A Quantitative Measure, Mechanism and Attractor for Self-Organization in Networked Complex Systems |title=Self-Organizing Systems |volume=7166 |pages=90–5 |series=Lecture Notes in Computer Science |year=2012 |last1=Georgiev |first1=Georgi Yordanov |isbn=978-3-642-28582-0 |s2cid=377417 }}
* {{cite journal|title=The Least Action and the Metric of an Organized System |journal=Open Systems & Information Dynamics |volume=9 |issue=4 |pages=371–380 |arxiv=1004.3518 |last1=Georgiev |first1=Georgi |last2=Georgiev |first2=Iskren |year=2002 |doi=10.1023/a:1021858318296|s2cid=43644348 }}
* {{cite journal|title= Metaphysics of the Principle of Least Action|journal= Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics |volume=62  |pages=189–201 |arxiv=1511.03429| last1=Terekhovich|first1=Vladislav |year=2018 |doi=10.1016/j.shpsb.2017.09.004|bibcode= 2018SHPMP..62..189T |s2cid= 85528641 }}
* [https://feynmanlectures.caltech.edu/II_19.html The Feynman Lectures on Physics Vol. II Ch. 19: The Principle of Least Action]

{{Authority control}}

{{DEFAULTSORT:Principle Of Least Action}}
[[Category:Concepts in physics]]
[[Category:Variational principles]]
[[Category:History of physics]]
[[Category:Scientific laws]]

[[de:Prinzip der kleinsten Wirkung]]
[[sq:Principi i Hamiltonit]]
