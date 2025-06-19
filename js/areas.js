const areas = [
  {
    id: "area1",
    name: "Area 1: Cave Entrance",
    content: `
                <div class="boxed-text">
                    <p>You follow the hidden tunnel into a large, cool cavern. A natural pillar of rock supports the ceiling, and three large stalagmites rise from the stone floor. To the west, you see three bedrolls and a messy heap of mining supplies—sacks of flour, bags of salt, casks of salted meat, lanterns, flasks of lamp oil, pickaxes, and shovels. Amid the supplies, a humanoid form lies still. The northeastern section of the cavern has collapsed, forming a dark pit approximately ten feet wide; a sturdy hemp rope is tied around a nearby stalagmite and dangles down into the chasm.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 10:</strong> To notice that while the supplies are varied, some items like pickaxes and shovels appear well-used, while food supplies seem relatively untouched and are beginning to spoil. The area has a faint, lingering scent of woodsmoke, now cold.</li>
                        <li><strong>WISDOM (PERCEPTION) - DC 12 (near the pit):</strong> To hear a faint, intermittent dripping sound from the bottom of the pit and notice the tunnels leading off from its base appear roughly hewn.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">DEAD DWARF (THARDEN)</h4>
                        <p>The body is that of a male dwarf miner, clad in sturdy traveler's clothes, dead for at least a week. He wears a pair of finely crafted leather boots.</p>
                        <ul class="list-disc list-inside text-secondary-text space-y-1 mt-2">
                            <li><strong>WISDOM (MEDICINE) - DC 12:</strong> Examining the body reveals the cause of death was multiple stab wounds, likely from small, sharp blades (such as daggers or shortswords). The wounds seem to have been inflicted quickly and viciously.</li>
                            <li><strong>Treasure:</strong> Tharden wears a pair of <em>boots of striding and springing</em>.</li>
                        </ul>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">DWARVES' SUPPLIES</h4>
                        <p>The supplies are potentially useful (flour, salt, salted meat, lanterns, oil, tools) but not particularly valuable in terms of coin. They appear to have been ransacked or hastily searched.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">OPEN PIT</h4>
                        <p>The pit is twenty feet deep. The sturdy hemp rope allows for safe descent and ascent without a check. Climbing up or down the rough-hewn walls of the pit without a rope requires a successful DC 14 Strength (Athletics) check. A character who fails the check by 5 or more falls and takes 2d6 bludgeoning damage, landing prone at the bottom. The tunnel at the bottom of the pit leads <a href="#" class="area-link" data-area="area2">northwest toward area 2</a> and <a href="#" class="area-link" data-area="area3">east toward area 3</a>.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li>The tunnel at the bottom of the pit leads <a href="#" class="area-link" data-area="area2">northwest toward area 2</a> and <a href="#" class="area-link" data-area="area3">east toward area 3</a>.</li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>This was the campsite of the Rockseeker brothers. The dead dwarf is Tharden, Gundren's brother, who was killed by the Black Spider. Gundren's other brother, Nundro, was here as well and is currently the Black Spider's prisoner in <a href="#" class="area-link" data-area="area20">area 20</a>. Nezznar overlooked the boots in his haste.</p>
                </div>
            `
  },
  {
    id: "area2",
    name: "Area 2: Mine Tunnels",
    content: `
                <div class="boxed-text">
                    <p>This section of the mine consists of numerous intersecting passages, their ceilings only about six feet high. Many passages end in dead-ends or partially excavated rock faces. The air is stale and a faint, earthy scent of decay hangs in the air. It's noticeably cooler here than in the entrance cavern.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 13:</strong> To notice faint slime trails on the walls or floor in some passages, as if something large and amorphous has dragged itself through. The trails glisten faintly in any light.</li>
                        <li><strong>INTELLIGENCE (NATURE) - DC 14 (if slime is spotted and examined):</strong> To identify the slime as characteristic of an ooze, likely an Ochre Jelly, known for its acidic properties and ability to split.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: LURKING OOZE(S)</h4>
                        <p>An <strong>Ochre Jelly</strong> (2024 MM) lurks in one of the dead-end passages. When the party enters this section of the mine, the jelly begins to stalk the group, instinctively waiting for an opportunity to attack a lone target or ambush from a narrow passage or ceiling crevice.</p>
                        <div class="stat-block">
                            <h4>Ochre Jelly (CR 2)</h4>
                            <p><strong>AC:</strong> 8, <strong>HP:</strong> 52</p>
                            <p><strong>Attack (Pseudopod):</strong> +4 to hit, 3d6+2 acid damage.</p>
                            <p><strong>Key Features:</strong> Amorphous, Spider Climb, Resistance to acid; Immunity to lightning, slashing; Condition Immunities (blinded, charmed, deafened, exhaustion, frightened, prone). Splits into two smaller jellies if takes slashing or lightning damage when it has at least 10 HP.</p>
                        </div>
                        <p class="mt-2"><strong>DM Option (Increased Challenge):</strong> Two Ochre Jellies, or one Ochre Jelly and 2-3 Gray Ooze Minions (FM rules: 1 HP, average damage, Corrode Metal).</p>
                        <p class="mt-2"><strong>Tactics:</strong> The jelly uses the narrow, 6-foot high passages to its advantage. The low ceilings may impose disadvantage on attacks with certain large weapons. It will try to engulf a target if possible (if using stats that allow engulf) or focus acid attacks to corrode armor/weapons if that variant ability is used.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">DEAD-END PASSAGES</h4>
                        <p>These are places where the original miners gave up and decided to move on to other spots. Some may contain loose rocks or minor cave-ins (no significant hazard unless deliberately disturbed).</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area3">Southeast tunnel to area 3</a></li>
                        <li><a href="#" class="area-link" data-area="area6">East door to area 6</a></li>
                        <li><a href="#" class="area-link" data-area="area9">North stairs to area 9</a></li>
                        <li><a href="#" class="area-link" data-area="area10">Northwest tunnel to area 10</a></li>
                        <li><a href="#" class="area-link" data-area="area1">South tunnel to area 1</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The Ochre Jelly is a natural hazard of the old mine, not directly placed by Nezznar, but it serves his purpose by making these tunnels dangerous to explore.</p>
                </div>
            `
  },
  {
    id: "area3",
    name: "Area 3: Old Entrance",
    content: `
                <div class="boxed-text">
                    <p>Many tunnels intersect at this natural, thirty-foot-high cavern. The walls are carved with simple reliefs showing dwarf and gnome miners hard at work. Below them, nearly two dozen skeletons in rusted scraps of armor—both dwarf and orc remains—are scattered across the cavern floor. Half a dozen large brass lanterns stand in niches or on ledges around the cavern, but none are lit. A faint, leathery, and slightly metallic scent hangs in the air.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 14:</strong> To spot small, dark shapes clinging to the shadowy recesses of the 30-foot high ceiling, almost like large bats. They are very still. (This check is contested by the Stirges' Stealth if they are actively hiding).</li>
                        <li><strong>INTELLIGENCE (HISTORY) - DC 12:</strong> To recognize that the style of armor on the skeletons and the carvings of miners date back several centuries, to the time of the Phandelver's Pact.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: STIRGES</h4>
                        <p>Clinging to the ceiling like bats are eight <strong>Stirges</strong> (2024 MM). The monsters find scant living prey in the mines and are ravenous. If the characters are looking down at the skeletons on the floor, the Stirges are likely get the drop on them.</p>
                        <div class="stat-block">
                            <h4>Stirge (CR 1/8)</h4>
                            <p><strong>AC:</strong> 13, <strong>HP:</strong> 5</p>
                            <p><strong>Attack (Proboscis):</strong> +5 to hit, 1d6+3 piercing damage. If it hits, the stirge attaches. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 2d4 necrotic damage due to blood loss.</p>
                            <p><strong>Key Features:</strong> Darkvision, Fly 40 ft.</p>
                        </div>
                        <p class="mt-2"><strong>Tactics:</strong> Any character who isn't watching the ceiling is surprised unless their passive Wisdom (Perception) score is higher than the Stirges' Dexterity (Stealth) check total (roll once for all of them: d20+3). Characters who aren't surprised hear a chorus of sharp flapping noises as the Stirges descend to attack, aiming to attach to the nearest warm-blooded creature.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">SKELETAL REMAINS & CARVINGS</h4>
                        <p>The skeletons are too damaged and old to be animated. The carvings depict scenes of camaraderie between dwarves and gnomes, mining precious metals and gems, and fending off goblinoid creatures. The lanterns are tarnished but intact; with oil and new wicks, they could be made functional.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area2">Northwest tunnel to area 2</a></li>
                        <li><a href="#" class="area-link" data-area="area6">North door to area 6</a></li>
                        <li><a href="#" class="area-link" data-area="area7">Northwest tunnel towards area 7</a></li>
                        <li><a href="#" class="area-link" data-area="area8">East tunnel to area 8</a></li>
                        <li><a href="#" class="area-link" data-area="area4">South tunnel with west door to area 4</a> and <a href="#" class="area-link" data-area="area5">east door to area 5</a>.</li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The lanterns and the carvings of miners at work were meant as a welcome to newcomers in the mine's heyday. The battle here was fierce, a last stand for some of the mine's defenders against the orc invasion.</p>
                </div>
            `
  },
  {
    id: "area4",
    name: "Area 4: Old Guardroom",
    content: `
                <div class="boxed-text">
                    <p>Splintered stone benches and heaps of rubble from a partially collapsed ceiling fill this small guardroom. Amid ruined stone bunks and toppled weapon racks, the bones of several dwarves and orcs lie scattered. The air is dusty and still, with a faint, dry scent of ancient decay.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 12:</strong> To notice that some of the bones seem arranged in an almost unnatural stillness, not quite settled like the others amidst the rubble. A faint scraping sound might be heard if the room is entered quietly.</li>
                        <li><strong>INTELLIGENCE (INVESTIGATION) - DC 13 (if examining weapon racks):</strong> To find a few salvageable but rusty arrowheads or a broken spear haft, suggesting this room was stripped of useful gear long ago.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: ANIMATED DEAD</h4>
                        <p>In the round after any living creature enters this chamber, the bones begin to stir and knit together, forming six <strong>Skeletons</strong> (2024 MM) and one <strong>Minotaur Skeleton</strong> (2024 MM).</p>
                        <div class="stat-block">
                            <h4>Skeleton (CR 1/4)</h4>
                            <p><strong>AC:</strong> 14, <strong>HP:</strong> 13</p>
                            <p><strong>Attack (Shortsword or Shortbow):</strong> +5 to hit, 1d6+3 piercing damage.</p>
                            <p><strong>Key Features:</strong> Darkvision, Vulnerability to bludgeoning; Immunity to poison, exhaustion.</p>
                        </div>
                        <div class="stat-block mt-2">
                            <h4>Minotaur Skeleton (CR 2)</h4>
                            <p><strong>AC:</strong> 12 (natural armor), <strong>HP:</strong> 67</p>
                            <p><strong>Attack (Greataxe):</strong> +6 to hit, 1d12+4 slashing damage.</p>
                            <p><strong>Gore:</strong> +6 to hit, 1d8+4 piercing damage.</p>
                            <p><strong>Charge:</strong> If moves 10 ft. straight toward a target and hits with Gore, target takes extra 2d8 piercing damage and must succeed DC 14 Str save or be pushed 10 ft. and knocked prone.</p>
                            <p><strong>Key Features:</strong> Darkvision, Vulnerability to bludgeoning; Immunity to poison, exhaustion.</p>
                        </div>
                        <p class="mt-2"><strong>Tactics:</strong> The skeletons and Minotaur Skeleton fight until destroyed. The Minotaur Skeleton will Charge the most imposing or closest character. The other Skeletons will attempt to support it or engage other targets. They use the rubble for cover where possible.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">RUBBLE AND RUINED FURNISHINGS</h4>
                        <p>The rubble provides half cover in several spots. Searching the ruined bunks or weapon racks (DC 14 Intelligence (Investigation)) might yield a forgotten waterskin (empty) or a few copper pieces, but nothing of significant value remains.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area3">East door to area 3</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>This guardroom was overrun early in the fighting when the orcs attacked. The lingering necromantic energies of the dungeon, or perhaps Mormesk's influence (Area 14), animate these remains when disturbed.</p>
                </div>
            `
  },
  {
    id: "area5",
    name: "Area 5: Assayers’ Office",
    content: `
                <div class="boxed-text">
                    <p>This small chamber appears to have once been an office or storeroom. A large stone counter bisects the room, set with three dusty iron balance scales. Cubbyholes carved into the north wall are stuffed with faded, dusty paper scraps. The air is thick with the smell of old paper and dust. Several long-dead corpses—gnomes and orcs by their look—are sprawled across the floor, their bones picked clean.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 11:</strong> To notice that one of the gnomish corpses clutches a small, almost completely disintegrated leather pouch.</li>
                        <li><strong>INTELLIGENCE (INVESTIGATION) - DC 13 (if examining the counter):</strong> To see that the counter itself seems unusually sturdy and one section near the floor looks slightly different in construction, perhaps indicating a hidden compartment or strongbox.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">PAPER SCRAPS & CUBBYHOLES</h4>
                        <p>The centuries-old paper in the cubbyholes disintegrates if touched carelessly. A character who carefully handles them and reads Dwarvish or Gnomish can see faint markings on a few scraps, recording weigh-ins of ore and disbursements of coin. A successful DC 14 Intelligence (Investigation) check while sifting through the scraps reveals one partially intact page detailing payment schedules, signed with a symbol recognizable (DC 12 Intelligence (History)) as belonging to the Phandelver mining consortium.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">CORPSES</h4>
                        <p>The gnomes and orcs appear to have died fighting each other. The gnomish corpse clutching the pouch (if spotted) has nothing of value in it; the pouch itself crumbles to dust if handled roughly.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">IRON STRONGBOX (TREASURE)</h4>
                        <p>Behind the counter, set into its base or hidden beneath a loose flagstone (if the Investigation check above was successful, or if the party searches thoroughly), is a locked iron strongbox. Opening it requires thieves' tools and a successful DC 18 Dexterity check. This pay chest was overlooked in the fighting and contains 600 cp, 180 sp, 90 ep, and 60 gp.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area3">West door to area 3</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The mine's assayers worked here, weighing and assessing ore samples and paying the miners for their labor. The office was a scene of desperate fighting during the orc invasion.</p>
                </div>
            `
  },
  {
    id: "area6",
    name: "Area 6: South Barracks",
    content: `
                <div class="boxed-text">
                    <p>Old stone bunks in orderly rows line the walls of this chamber. A corroded iron brazier full of old coals stands near the middle of the room. The air is heavy with a carrion stench. Scraps of armor and the bones of a half-dozen dwarves and orcs lie strewn about. Hunched among the remains are three gray, gaunt figures, pawing at the scraps and gnawing on old bones. They look up with glowing eyes as you enter, a low snarl emanating from them.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 12 (if listening at the partially open door before entering):</strong> To hear faint crunching, splintering, and wet tearing sounds from within.</li>
                        <li><strong>INTELLIGENCE (RELIGION OR NATURE) - DC 13 (upon seeing the figures):</strong> To recognize the creatures as Ghouls, undead monstrosities driven by an insatiable hunger for humanoid flesh.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: GHOULS</h4>
                        <p>Three <strong>Ghouls</strong> (2024 MM) from the pack in area 9 are here, cracking and gnawing on the ancient bones of the fallen in the vain hope that some tasty morsel of marrow remains. The ghouls, eager for a fresh meal, attack immediately.</p>
                        <div class="stat-block">
                            <h4>Ghoul (CR 1)</h4>
                            <p><strong>AC:</strong> 12, <strong>HP:</strong> 22</p>
                            <p><strong>Multiattack:</strong> Two Bite attacks OR one Claw attack.</p>
                            <p><strong>Bite:</strong> +4 to hit, 1d6+2 piercing + 1d6 necrotic damage.</p>
                            <p><strong>Claw:</strong> +4 to hit, 1d4+2 slashing. If target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed until the end of its next turn.</p>
                            <p><strong>Key Features:</strong> Darkvision, Immunity to charmed, exhaustion, poison.</p>
                        </div>
                        <p class="mt-2"><strong>DM Option (Increased Challenge):</strong> One of the Ghouls is a <strong>Ghast</strong> (2024 MM, CR 2), its Stench (DC 10 Con save or poisoned while within 10 ft) adding another layer of difficulty.</p>
                        <p class="mt-2"><strong>Tactics:</strong> The Ghouls will try to overwhelm a single target, using their Claws to paralyze and then feasting with their Bites. If a Ghast is present, it will try to keep multiple PCs within its Stench aura.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">OLD BUNKS AND BRAZIER</h4>
                        <p>The stone bunks are bare. The brazier is cold and contains only ash and charcoal remnants.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area2">West door to area 2</a></li>
                        <li><a href="#" class="area-link" data-area="area3">South door to area 3</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>This was a miners' barracks. The Ghouls are part of a larger pack that infests this part of Wave Echo Cave, drawn by the lingering scent of death and despair.</p>
                </div>
            `
  },
  {
    id: "area7",
    name: "Area 7: Ruined Storeroom",
    content: `
                <div class="boxed-text">
                    <p>The eastern wall of this chamber has collapsed into a mass of rubble, exposing the rough-hewn rock of the cavern beyond. To the north, a sturdy-looking wooden door stands ajar, leading into what appears to be a smaller storeroom. Dust motes dance in the dim light filtering from your light source.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 10:</strong> To notice the northern storeroom seems relatively intact compared to the ruined main chamber. The door, though ajar, looks solid.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">NORTHERN STOREROOM</h4>
                        <p>This good-sized storeroom has dusty wooden kegs tucked neatly against its walls. All of them are cracked and split open from age, their contents long evaporated. The storeroom door is in good shape and can easily be blocked or barred from the inside.</p>
                        <p class="mt-2"><strong>Resting Place:</strong> It's not comfortable, but the storeroom is a secure resting place. No monsters come this way (unless drawn by excessive noise from the party).</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">COLLAPSED EASTERN WALL</h4>
                        <p>The rubble is unstable. Trying to climb over it or clear it would be noisy and time-consuming, potentially attracting unwanted attention from other areas. There's no obvious passage through the collapse.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area3">South tunnel to area 3</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>This area provides a much-needed safe haven for the party if they need to take a short rest. Emphasize its security if they choose to use it.</p>
                </div>
            `
  },
  {
    id: "area8",
    name: "Area 8: Fungi Cavern",
    content: `
                <div class="boxed-text">
                    <p>This large cavern is filled with a bizarre spectacle of fungal life. Dense carpets of weird fungi cover large sections of the floor, including puffballs a foot across, strange shelf fungus growing on stalagmites, and large, fleshy stalks and caps easily five feet tall. Some of_the puffballs and cap fungi glow with an eerie green phosphorescence, bathing parts of the cavern in a dim, pulsating light. The air is damp and smells strongly of mildew and something else, faintly acrid.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 13:</strong> To notice that the air shimmers faintly above the carpets of smaller fungi, and that some of the larger stalks occasionally twitch or sway as if reacting to air currents, or perhaps something else.</li>
                        <li><strong>INTELLIGENCE (NATURE) - DC 14:</strong> To recognize some of the fungi as potentially hazardous, such as those known to release spores or toxins when disturbed. The green phosphorescence is likely bioluminescent, but the acrid undertone in the smell is concerning.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">POISON GAS HAZARD</h4>
                        <p>Most of the fungi is harmless, and the green-glowing fungi allow creatures to see the entire cavern without the aid of darkvision or a light source. However, whenever a creature attempts to cross the cavern by moving through the dense carpets of fungi (which cover most of the floor), the fungi release poisonous gas into the air.</p>
                        <p class="mt-1">Each creature in the cavern must succeed on a <strong>DC 13 Constitution saving throw</strong> or take <strong>4d6 poison damage</strong> and be <strong>Poisoned</strong> for 10 minutes. The gas disperses after 1 minute, but until then, any living creature that ends its turn in the cavern (specifically in an area where the gas was released that round) must repeat the saving throw.</p>
                        <p class="mt-1"><strong>Avoiding the Gas:</strong> Characters might try to avoid the carpets by sticking to rockier patches, climbing over larger fungi (DC 12 Athletics or Acrobatics, failure might mean landing in a gas-releasing patch), or using magical means of traversal.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">OPTIONAL CREATURES: VIOLET FUNGI</h4>
                        <p>Hidden amongst the other fungi are 2-3 <strong>Violet Fungi</strong> (2024 MM, CR 1/4). They are stationary but will lash out with their rotting touch (Attack +3, 1d8 necrotic + target must succeed DC 10 Con save or be poisoned for 1 minute) if a creature comes within 10 feet.</p>
                         <div class="stat-block">
                            <h4>Violet Fungus (CR 1/4)</h4>
                            <p><strong>AC:</strong> 5, <strong>HP:</strong> 18</p>
                            <p><strong>Multiattack:</strong> Makes 1d4 Rotting Touch attacks.</p>
                            <p><strong>Rotting Touch:</strong> +3 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>
                            <p><strong>Key Features:</strong> False Appearance (indistinguishable from ordinary fungus while motionless).</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area3">West tunnel to area 3</a></li>
                        <li><a href="#" class="area-link" data-area="area9">North tunnel to area 9</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>This cave has hindered Nezznar's explorations. The drow suspects that the mine's magic workshops are close by, but he's reluctant to risk dealing with the monsters and hazards here. The phosphorescent fungi are beautiful but belie the danger.</p>
                </div>
            `
  },
  {
    id: "area9",
    name: "Area 9: Great Cavern",
    content: `
                 <div class="boxed-text">
                    <p>Steep escarpments divide this vast cavern into three sections—high ledges at either end, and a lower section in the middle. Carved stone stairs climb up to the ledges. Two large, overturned stone tables lie in the middle section, along with a pair of cold, dented braziers. A smaller, intact table stands on the eastern ledge. The skeletal remains of dozens of dead warriors—dwarves, gnomes, orcs, and even a couple of hulking ogres—attest to the fierceness of the fighting that took place here long ago. The air is stale and carries a faint, but pervasive, charnel scent.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 14:</strong> To notice movement in the deep shadows on the western ledge – fleeting glimpses of gaunt shapes or glowing eyes. A low, almost sub-audible growl might be heard. (This DC is higher if the party is making noise or carrying bright lights without attempting stealth).</li>
                        <li><strong>INTELLIGENCE (HISTORY) - DC 13:</strong> The variety of skeletal remains and the scale of the battle implied suggest this was a major conflict point, likely part of the final battles for Wave Echo Cave.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: GHOUL PACK</h4>
                        <p>Five <strong>Ghouls</strong> (2024 MM) and one <strong>Ghast</strong> (2024 MM) lurk in the shadows on the western ledge. The Ghast is their leader. They notice any light or noise elsewhere in the cave and quickly bound down (or climb down the escarpment) to attack. The undead are hungry and fight until destroyed.</p>
                        <div class="stat-block">
                            <h4>Ghoul (CR 1) - 5 present</h4>
                            <p><strong>AC:</strong> 12, <strong>HP:</strong> 22</p>
                            <p><strong>Multiattack:</strong> Two Bite attacks OR one Claw attack.</p>
                            <p><strong>Bite:</strong> +4 to hit, 1d6+2 piercing + 1d6 necrotic damage.</p>
                            <p><strong>Claw:</strong> +4 to hit, 1d4+2 slashing. If target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed until the end of its next turn.</p>
                        </div>
                        <div class="stat-block mt-2">
                            <h4>Ghast (CR 2) - 1 present</h4>
                            <p><strong>AC:</strong> 13, <strong>HP:</strong> 36</p>
                            <p><strong>Multiattack:</strong> One Bite attack and one Claw attack.</p>
                            <p><strong>Bite:</strong> +5 to hit, 2d8+3 piercing damage.</p>
                            <p><strong>Claw:</strong> +5 to hit, 2d6+3 slashing. If target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>
                            <p><strong>Stench:</strong> Any creature that starts its turn within 10 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.</p>
                            <p><strong>Turning Defiance:</strong> The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead.</p>
                        </div>
                        <p class="mt-2"><strong>Tactics:</strong> The Ghast will try to keep its Stench aura affecting multiple PCs. The Ghouls will swarm targets, prioritizing any that appear isolated or vulnerable, especially those affected by the Stench or paralyzed.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">ESCARPMENTS & STAIRS</h4>
                        <p>The escarpments are 10 feet high and require a successful DC 13 Strength (Athletics) check to climb without using the stairs. A creature that falls or is knocked from the top of a ledge takes 1d6 bludgeoning damage and lands prone. The stone stairs are sturdy.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">FURNISHINGS & REMAINS</h4>
                        <p>The tables are heavy stone and overturned, providing half cover. The braziers are empty. Searching the numerous skeletal remains (DC 15 Wisdom (Perception)) might yield a few tarnished coins (2d10 sp, 1d6 gp total) or a cracked gemstone worth 5 gp, but nothing of significant value.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area2">South stairs to area 2</a></li>
                        <li><a href="#" class="area-link" data-area="area8">South tunnel to area 8</a></li>
                        <li><a href="#" class="area-link" data-area="area10">West tunnel to area 10</a></li>
                        <li><a href="#" class="area-link" data-area="area11">Northwest tunnel to area 11</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>This cave once served as the banquet room, meeting area, and mead hall for the miners. The battle here was one of the last major engagements before the mine fell. The Ghast is an older, more cunning specimen that has established dominance over this pack.</p>
                </div>
            `
  },
  {
    id: "area10",
    name: "Area 10: Dark Pool",
    content: `
                <div class="boxed-text">
                    <p>A still, dark pool of water fills much of this cavern. The water is murky, revealing little of what might lie within its depths. The shore of the pool consists of a thin layer of broken shells from strange, pale mussels, and a distinct fishy odor hangs in the air. A sluggish stream flows out of the cave to the northeast. You can see a passage leading south and a set of rough-hewn steps climbing up to the east.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 12:</strong> To notice a subtle ripple or disturbance on the surface of the pool from time to time, as if something moves beneath, or to spot small, pale, eyeless fish darting near the edges.</li>
                        <li><strong>WISDOM (SURVIVAL) - DC 13:</strong> The mussels appear edible but are unlike any surface-world varieties. The fishy odor is strong, suggesting a significant aquatic population or decay.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">THE POOL</h4>
                        <p>The pool is 20 feet deep in the middle. The water is cold and murky, limiting visibility to 5 feet (or 10 feet with a bright light source). The stream to the northeast is 3 feet deep, and the ceiling of the passage is 2 to 3 feet above the water. Characters can easily wade through the stream to area 18.</p>
                        <p class="mt-1">A character who explores the pool (requiring swimming) finds an old skeleton lying on the bottom, 10 feet from the shore and under 10 feet of water. These are the remains of a human wizard from old Phandalin who died defending the mines against the orc attackers. Several orc arrows are still lodged in the skeleton's ribcage.</p>
                        <ul class="list-disc list-inside text-secondary-text space-y-1 mt-2">
                            <li><strong>Treasure:</strong> The skeleton wears two platinum rings (75 gp each) and clutches a <em>wand of magic missiles</em> in its bony fingers.</li>
                        </ul>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">OPTIONAL HAZARD/CREATURE: GIANT CRAB(S)</h4>
                        <p>One or two <strong>Giant Crabs</strong> (2024 MM, CR 1/8) lurk in the murky depths of the pool. They are camouflaged amongst the rocks and shells on the bottom (Stealth +2 vs. Perception if characters are actively looking for threats in the water). They will attack anyone entering the water or spending too long at its edge, grabbing with their claws.</p>
                        <div class="stat-block">
                            <h4>Giant Crab (CR 1/8)</h4>
                            <p><strong>AC:</strong> 15 (natural armor), <strong>HP:</strong> 13</p>
                            <p><strong>Attack (Claw):</strong> +3 to hit, 1d4+1 bludgeoning damage, and target is grappled (escape DC 11). Has two claws, each can grapple one target.</p>
                            <p><strong>Key Features:</strong> Amphibious, Darkvision (if applicable to crab).</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area2">Southeast tunnel to area 2</a></li>
                        <li><a href="#" class="area-link" data-area="area9">East tunnel to area 9</a></li>
                        <li><a href="#" class="area-link" data-area="area11">North tunnel to area 11</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The wizard was one of the defenders of Phandelver's Pact, who fell back to this position trying to protect the Forge of Spells. The orcs shot him as he waded into the pool, perhaps trying to escape or hide something.</p>
                </div>
            `
  },
  {
    id: "area11",
    name: "Area 11: North Barracks",
    content: `
                <div class="boxed-text">
                    <p>Old stone bunks line the walls of this former barracks. A glowing iron brazier in the middle of the room provides both light and a surprising amount of heat. The air smells of unwashed bodies and cooked meat. If entering from the west, you see another door across the room, crudely blocked by a barricade made from the remains of a wooden table and splintered bunk frames. Gruff voices can be heard speaking in Goblin from beyond the barricade if it's intact, or from within the room if it's already breached.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                         <li><strong>WISDOM (PERCEPTION) - DC 12 (if listening at either door before entry/breach):</strong> To hear guttural voices speaking Goblin, discussing rations, boredom, and complaining about the "stinky dead ones" from other parts of the mine.</li>
                        <li><strong>INTELLIGENCE (INVESTIGATION) - DC 11 (if examining the glowing brazier):</strong> The brazier is indeed magical, radiating heat without consuming fuel. It appears to be an old dwarven or gnomish contraption.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: BUGBEARS</h4>
                        <p>Three <strong>Bugbear Warriors</strong> (2024 MM) and one <strong>Bugbear Tyrant</strong> (*Flee, Mortals!*, CR 3) reside in this chamber. They are loyal minions of Nezznar. This room marks the front line in the Black Spider's assault on Wave Echo Cave, and the bugbears are here to prevent ghouls, zombies, or other undead from troubling their master in his lair (area 19).</p>
                        <div class="stat-block">
                            <h4>Bugbear Warrior (CR 1) - 3 present</h4>
                            <p><strong>AC:</strong> 14 (hide armor), <strong>HP:</strong> 33</p>
                            <p><strong>Attack (Morningstar):</strong> +4 to hit, 2d8+2 piercing damage.</p>
                            <p><strong>Grab:</strong> +4 to hit, 2d6+2 bludgeoning damage, and target is grappled (escape DC 12). </p>
                            <p><strong>Abduct:</strong> As a bonus action, the bugbear can move up to its speed, taking one Medium or smaller creature it is grappling with it. This movement doesn't provoke opportunity attacks from the grappled creature.</p>
                            <p><strong>Key Features:</strong> Darkvision, Stealth +6, Surprise Attack (deals extra 2d6 damage on first turn of combat if it surprises a creature).</p>
                        </div>
                         <div class="stat-block mt-2">
                            <h4>Bugbear Tyrant (FM, CR 3) - 1 present</h4>
                            <p><strong>AC:</strong> 16 (chain mail), <strong>HP:</strong> (Approx. 65, consult FM for exact)</p>
                            <p><strong>Attack (Maul):</strong> +5 to hit, 2d8+3 bludgeoning damage (adjust per FM).</p>
                            <p><strong>Key Features:</strong> Darkvision, Stealth +4. Likely has command abilities (e.g., "Get 'Em, Lads!": Minions make an attack) and other martial prowess features. Consult *Flee, Mortals!* for specific abilities.</p>
                        </div>
                        <p class="mt-2"><strong>Tactics:</strong> The Bugbear Warriors will try to use their Grab and Abduct features to isolate PCs or drag them into difficult positions. The Bugbear Tyrant will direct the Warriors, use its own powerful attacks, and focus on characters who seem to be leaders or major threats. They removed the corpses they found here and built the barricade.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">BARRICADED DOOR (EASTERN)</h4>
                        <p>The eastern door is barricaded from inside the room and requires a successful DC 20 Strength (Athletics) check to force open. If the characters try to force it, the Bugbears will be alerted and prepare an ambush.</p>
                    </div>
                     <div class="element-block">
                        <h4 class="element-heading">TREASURE</h4>
                        <p>The Bugbear Tyrant carries a pouch containing 15 cp, 13 ep, and a <em>potion of vitality</em>.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area9">Southeast tunnel to area 9</a></li>
                        <li><a href="#" class="area-link" data-area="area10">South tunnel to area 10</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>Like area 6, this was formerly a barracks for miners. Nezznar's bugbears cleared it out. The glowing brazier is a relic of the mine's original enchantments and still functions perfectly.</p>
                </div>
            `
  },
  {
    id: "area12",
    name: "Area 12: Smelter Cavern",
    content: `
                <div class="boxed-text">
                    <p>A massive blast furnace and a complex mechanical bellows powered by a large waterwheel dominate this large chamber. The furnace is cold and dark, but heaps of coal are piled nearby, along with carts full of unrefined ore. The waterwheel sits in a ten-foot-wide channel cut into the floor of the room, but the channel is currently dry. Passages exit to the west, south, and east. The empty channel also exits to the north and east. More than a dozen withered corpses in remnants of armor—both dwarven and orcish—are scattered around the room. Floating with an almost regal malevolence above them is a humanoid skull, engulfed in eerie green flame.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 13:</strong> To notice that while most corpses seem ancient, a few of the orc bodies appear more recently deceased, perhaps within the last few weeks, and show signs of charring or magical burns. The floating skull turns slowly, as if surveying its domain.</li>
                        <li><strong>INTELLIGENCE (ARCANA) - DC 15:</strong> To recognize the floating, flaming skull as a Flameskull, a dangerous and intelligent undead creature created through dark necromantic rituals.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: UNDEAD GUARDIANS</h4>
                        <p>Six of the fallen dwarf warriors are <strong>Zombies</strong> (2024 MM). They rise and pursue any living creatures that enter the room, but they do not pursue creatures outside this area for more than 1 round. In addition, a far more intelligent undead guards this area: a <strong>Flameskull</strong> (2024 MM).</p>
                        <div class="stat-block">
                            <h4>Zombie (CR 1/4) - 6 present</h4>
                            <p><strong>AC:</strong> 8 (or 10 if DM buffs), <strong>HP:</strong> 15 (or 22 if using 2014 average)</p>
                            <p><strong>Attack (Slam):</strong> +3 (or +4 if DM buffs) to hit, 1d6+1 (or 1d8+1) bludgeoning damage.</p>
                            <p><strong>Undead Fortitude:</strong> If damage reduces the zombie to 0 HP, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 HP instead.</p>
                        </div>
                        <div class="stat-block mt-2">
                            <h4>Flameskull (CR 4)</h4>
                            <p><strong>AC:</strong> 13, <strong>HP:</strong> 40</p>
                            <p><strong>Spellcasting (Int, DC 13, +5 to hit):</strong></p>
                            <ul class="list-disc list-inside ml-4">
                                <li>At will: <em>mage hand, fire bolt (2d10)</em></li>
                                <li>3/day each: <em>magic missile (as 2nd level slot), shield</em></li>
                                <li>1/day each: <em>flaming sphere, blur, fireball (8d6)</em></li>
                            </ul>
                            <p><strong>Multiattack:</strong> Two Fire Ray attacks.</p>
                            <p><strong>Fire Ray:</strong> +5 to hit, range 30 ft., 3d6 fire damage.</p>
                            <p><strong>Key Features:</strong> Fly 40 ft. (hover), Magic Resistance, Rejuvenation, Illumination. Immunities: Cold, Fire, Poison; Resistances: Lightning, Necrotic, Piercing.</p>
                        </div>
                        <p class="mt-2"><strong>Tactics:</strong> The Zombies will try to bog down melee combatants. The Flameskull was a servant of the human wizards allied with the Phandelver dwarves and gnomes, and it continues to act on ancient instructions to prevent intruders from passing through. It will use its spells intelligently, starting with *Fireball* or *Flaming Sphere* to control areas and then using Fire Rays. It will utilize its flight to stay out of easy reach.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">SMELTER EQUIPMENT & CHANNEL</h4>
                        <p>This impressive chamber was the heart of the Wave Echo Cave mining operation. Here, the dwarves melted down their ore. The dry channel is where the dwarves diverted the stream from area 18 to power the waterwheel, which in turn operated the bellows. The channel's bottom is 5 feet below floor level, and no ability check is required to scramble in or out. Characters in the channel can follow it out of this room to the north or to the east, though the ceiling is only 5 feet high after the channel exits this room, requiring Medium creatures to squeeze.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area9">West tunnel to area 9</a></li>
                        <li><a href="#" class="area-link" data-area="area13">South tunnel to area 13</a></li>
                        <li><a href="#" class="area-link" data-area="area14">East tunnel to area 14</a></li>
                        <li><a href="#" class="area-link" data-area="area17">North channel to area 17</a></li>
                        <li><a href="#" class="area-link" data-area="area18">East channel to area 18</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>Like the fungi cavern at area 8, this chamber poses a serious obstacle that prevents Nezznar from reaching his objective—the Forge of Spells (area 15). The drow is still formulating a plan to get past the undead guardians. The Flameskull does not differentiate between Nezznar's forces and the PCs; all are intruders.</p>
                </div>
            `
  },
  {
    id: "area13",
    name: "Area 13: Starry Cavern",
    content: `
                <div class="boxed-text">
                    <p>Glittering minerals embedded in the ceiling of this vast cavern catch and reflect your light, creating the breathtaking impression of a starry night sky. Dozens of skeletons—many crushed under fallen debris from the partially collapsed ceiling—are scattered across the floor. The air is still and carries a faint, almost electric tang. The cavern is large enough that it contains two freestanding stone structures. Each of these buildings is proportioned for human use, as opposed to the dwarf-sized doorways and furnishings you’ve seen elsewhere in the mines. Both structures have battered and blackened masonry walls, their double doors cracked and scorched. The cavern is divided by a low escarpment, into which a flight of stairs has been cut. Passages lead out of this area to the north, south, and west.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 12:</strong> To notice that the damage to the stone buildings seems to be from intense heat and concussive force, more so than simple decay. The scorch marks around the doors are deep.</li>
                        <li><strong>INTELLIGENCE (ARCANA) - DC 14:</strong> Any character proficient in Arcana can sense a subtle but pervasive aura of magic in this cavern. A <em>detect magic</em> spell reveals the same. The aura becomes stronger as one approaches the northern building (area 15).</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CEILING MINERALS & DEBRIS</h4>
                        <p>The glittering minerals in the ceiling are beautiful but are neither inherently magical nor particularly valuable if chipped away (mostly quartz and mica). The fallen debris creates patches of difficult terrain. The skeletons are too broken and scattered to pose a threat.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">STONE BUILDINGS</h4>
                        <p>These structures are clearly of a different architectural style than the rest of the mine, suggesting they were additions made by non-dwarven allies. The southern building is Area 14 (Wizards' Quarters), and the northern building is Area 15 (Forge of Spells).</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area12">North tunnel to area 12</a></li>
                        <li><a href="#" class="area-link" data-area="area14">South building to area 14</a></li>
                        <li><a href="#" class="area-link" data-area="area15">North building to area 15</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The structural damage and the skeletal remains in this area are evidence of the destructive spell battle fought here centuries ago when the orcs and their mercenary wizards stormed the mines. This cavern was a central hub for the magical operations within Wave Echo Cave.</p>
                </div>
            `
  },
  {
    id: "area14",
    name: "Area 14: Wizards’ Quarters",
    content: `
                <div class="boxed-text">
                    <p>The double doors leading into this stone building are cracked and warped, their iron hinges partially melted and twisted. Dust, ash, and walls blackened by fire greet you. Heaps of debris lie beneath a sagging ceiling, indicating this room was heavily damaged by a destructive blast. The furnishings—tables, chairs, bookshelves, and beds, all proportioned for human use—are charred or splintered but otherwise remarkably well preserved given the apparent devastation. Near the foot of one of the beds stands a scorched iron chest. A profound silence hangs in the air, heavy and cold.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 15:</strong> To feel an unnatural chill in the room that has nothing to do with the ambient temperature of the cave, and to glimpse fleeting, shadowy movements at the periphery of vision. A faint, almost inaudible whisper seems to echo from the walls.</li>
                        <li><strong>INTELLIGENCE (ARCANA) - DC 13:</strong> The preservation of the furnishings, despite the scorch marks, suggests some form of magical warding might have partially protected them, or that the destructive force was a specific type of energy rather than simple fire.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">FORCING THE DOORS</h4>
                        <p>Wrenching or smashing open the damaged doors requires a successful DC 15 Strength (Athletics) check. The noise will likely alert any occupant.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURE: MORMESK THE WRAITH</h4>
                        <p>This room contains the restless spirit of the last wizard to die here: <strong>Mormesk the Wraith</strong> (2024 MM). He is not immediately visible but rises up out of the floor—a chilling, spectral figure—when a living creature enters the room.</p>
                        <div class="stat-block">
                            <h4>Mormesk, Wraith (CR 5)</h4>
                            <p><strong>AC:</strong> 13, <strong>HP:</strong> 67</p>
                            <p><strong>Speed:</strong> 0 ft., fly 60 ft. (hover)</p>
                            <p><strong>Life Drain:</strong> Melee Spell Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8+3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.</p>
                            <p><strong>Create Specter:</strong> The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.</p>
                            <p><strong>Key Features:</strong> Incorporeal Movement, Sunlight Sensitivity. Damage Resistances: Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks. Damage Immunities: Necrotic, Poison. Condition Immunities: Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained.</p>
                        </div>
                        <p class="mt-2"><strong>Roleplaying Mormesk:</strong> Mormesk speaks in grave whispers. When he first rises, he says, "Your presence is offensive to me, your life forfeit. My treasures are mine alone, not yours to plunder!" If the characters make no attempt to reason with him, he attacks. If they try to reason (provided they haven't harmed him or seized property), he listens. He is irrevocably evil, but values magic items (especially scrolls), spellbooks, and arcane knowledge. A character must succeed on a DC 12 Charisma (Persuasion) check to convince him of an offering's value. He won't relinquish the wooden pipe in the chest but might part with coins/gems if the PCs agree to kill the Spectator in Area 15. If satisfied, he allows them to peruse his books and find the map.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">SCORCHED IRON CHEST (TREASURE)</h4>
                        <p>The chest is unlocked. It contains 1,100 cp, 160 sp, 50 ep, three diamonds (100 gp each), and a wooden pipe adorned with platinum filigree (150 gp).</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">BOOKSHELVES & TOMES</h4>
                        <p>A handful of magically preserved tomes remain on the shelves. Most are histories or philosophical treatises. One, however, has a map sewn into its cover. The map's presence can be discerned with a successful DC 12 Intelligence (Investigation) check. This map can lead to a future adventure of your own creation.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area13">North door to area 13</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>Mormesk was a powerful mage until he met his end in the spell battle. Centuries of anger have transformed him into a hate-filled apparition. He leads many of the undead in Wave Echo Cave. This building served as a guesthouse for visiting wizards working in the Forge of Spells (area 15).</p>
                </div>
            `
  },
  {
    id: "area15",
    name: "Area 15: Forge of Spells",
    content: `
                 <div class="boxed-text">
                    <p>This large workshop was clearly once a place of significant arcane power, though it was badly damaged by the ancient spell battle that laid waste to the mine. Worktables taking up two corners of the room are scorched, and the plaster has been burned off the masonry walls. In the middle of the room, a stone pedestal holds a small brazier in which an eerie green flame dances and crackles with unnatural life. The brazier and its pedestal appear to have been untouched by the forces that destroyed this area. Floating silently behind the brazier is a disturbing spherical creature, roughly four feet in diameter. Four eyestalks protrude from its central mass, two on each side. In the center of its body, a single large eye stares directly at you. A thick, burbling voice echoes inside your head: "Hello."</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 13:</strong> To notice that the green flame in the brazier casts no shadows and emits no heat, only an intense, verdant light. The floating creature remains perfectly still, its central eye unblinking.</li>
                        <li><strong>INTELLIGENCE (ARCANA) - DC 14 (upon seeing the creature):</strong> To identify the floating entity as a Spectator, a lesser type of beholderkin often summoned as a magical guardian.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">FORCING THE DOORS</h4>
                        <p>The northernmost door is scorched and cracked; forcing it open requires a successful DC 15 Strength (Athletics) check. The western double doors are just as damaged but stand slightly ajar.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURE: THE SPECTATOR</h4>
                        <p>The monster that guards this room is a <strong>Spectator</strong> (CR 3, use 2014 MM stats, with HP adjusted to ~58 and Eye Ray Save DC to 14). One of the human wizards who worked in the Forge of Spells summoned it to guard the magic items created and stored here. The sacking of the mine unhinged its grip on reality; it believes the mine is still in use, ignoring all evidence to the contrary.</p>
                        <div class="stat-block">
                            <h4>Spectator (CR 3, Adjusted)</h4>
                            <p><strong>AC:</strong> 14 (natural armor), <strong>HP:</strong> 58</p>
                            <p><strong>Speed:</strong> 0 ft., fly 30 ft. (hover)</p>
                            <p><strong>Eye Rays (Action, shoots two different rays, Save DC 14):</strong></p>
                            <ul class="list-disc list-inside ml-4">
                                <li><strong>Confusion Ray (Wis save):</strong> Target can't take reactions, rolls d10 on its turn to determine behavior (attacks random creature, does nothing, etc.).</li>
                                <li><strong>Paralyzing Ray (Con save):</strong> Paralyzed for 1 minute (save ends at end of each turn).</li>
                                <li><strong>Fear Ray (Wis save):</strong> Frightened for 1 minute (save ends at end of each turn, disadv. if spectator visible).</li>
                                <li><strong>Wounding Ray (Con save):</strong> Target takes 3d10 necrotic damage on failed save, half on success.</li>
                            </ul>
                            <p><strong>Spell Reflection (Reaction):</strong> If the spectator makes a successful saving throw against a spell, or a spell attack misses it, it can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator.</p>
                        </div>
                        <p class="mt-2"><strong>Roleplaying the Spectator:</strong> It greets intruders with a telepathic "Hello." If the party attempts to remove anything from this area, the Spectator attacks. If the Spectator is blinded somehow, it disappears back to its home plane, convinced it can no longer perform its task. A character can trick the Spectator into thinking they are authorized personnel sent to terminate its employment with a successful DC 15 Charisma (Deception) check. If successful, it departs.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">BRAZIER OF GREEN FLAME</h4>
                        <p>A successful DC 14 Intelligence (Arcana) check identifies the brazier as the source of the magic that suffuses the surrounding caverns. This magic has waned and can no longer permanently enchant items. However, any nonmagical weapon or suit of armor bathed in the green flame for at least 1 minute becomes a +1 weapon or +1 armor, respectively, for $1text{d}12$ hours. The brazier cannot be removed from the Forge.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">NORTHERN ROOM</h4>
                        <p>This small room is a separate workspace, where items being prepared for enchantment were polished and finished. Like the main workshop, it has been almost completely destroyed.</p>
                    </div>
                     <div class="element-block">
                        <h4 class="element-heading">TREASURE</h4>
                        <p>On the worktable in the southeast corner of the room are the last items the Spectator was charged to protect: <em>Lightbringer</em> and <em>Dragonguard</em>.</p>
                        <ul class="list-disc list-inside text-secondary-text space-y-1 mt-2">
                            <li><strong>Lightbringer:</strong> This +1 mace was made for a cleric of Lathander. The head of the mace is shaped like a sunburst and made of solid brass. It glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra $1text{d}6$ radiant damage to undead creatures.</li>
                            <li><strong>Dragonguard:</strong> This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.</li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area13">South door to area 13</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The Forge of Spells is where the wizards allied with the dwarves and gnomes of the Phandelver's Pact channeled the magic of these caverns. The wraith (area 14) wants to drive off or kill the Spectator but has so far failed. The Spectator sees nothing strange about undead roaming the mine, considering them just another type of worker or pest.</p>
                </div>
            `
  },
  {
    id: "area16",
    name: "Area 16: Booming Cavern",
    content: `
                <div class="boxed-text">
                    <p>A narrow, damp ledge overlooks a large, dark cavern that houses a surging, seething body of water. The rhythmic booming sound heard intermittently throughout the mines is deafeningly loud here. At regular intervals, a fresh surge of water funnels violently into this chamber from an unseen opening to the northeast, slamming against the far wall just below the ledge with immense force. The echo suggests this cave might be one arm of a much larger, water-filled cavern system.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 10:</strong> To feel the vibration of the rock through your feet just before each surge and to notice the high-water mark on the cavern walls, some 10 feet above the current receding water level.</li>
                        <li><strong>WISDOM (SURVIVAL) - DC 13:</strong> To determine the surges occur roughly every two minutes. The force of the water is clearly dangerous.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">LEDGE AND SURGING WATER</h4>
                        <p>The ledge hugging the south wall is 15 feet above the water's normal level. However, when water surges into the cave (every 2 minutes, or 20 rounds of combat), it raises the water level by 10 feet for about a minute before receding. During a surge, the water becomes extremely turbulent.</p>
                        <p class="mt-1"><strong>Hazard:</strong> Any creature on the ledge within 5 feet of the edge when a surge hits must succeed on a <strong>DC 12 Strength saving throw</strong> or be knocked off the ledge into the surging water. Creatures in the water during a surge are battered and tossed around, taking $2text{d}6$ bludgeoning damage at the start of their turn and being moved $2text{d}10$ feet in a random direction. The normal depth of the water is 20 feet; during a surge, it becomes 30 feet near the ledge.</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area17">South tunnel to area 17</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The booming sound is what gives Wave Echo Cave its name. The source of the surges is a connection to an underground river or perhaps a magically influenced tidal system deep within the mountains. Nezznar has not explored this area thoroughly due to the danger and lack of obvious connection to the Forge of Spells.</p>
                </div>
            `
  },
  {
    id: "area17",
    name: "Area 17: Old Streambed",
    content: `
                <div class="boxed-text">
                    <p>This passageway is barely four feet high, forcing Medium-sized creatures to stoop or crawl. It is obstructed by rounded boulders and smooth pebbles, clearly indicating it was once a streambed, though no water flows here now. The air is damp and cool, and the passage curves gently out of sight.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 11:</strong> To notice that the pebbles are worn very smooth, and the sides of the passage show water erosion marks up to about two feet high.</li>
                        <li><strong>INTELLIGENCE (NATURE) OR WISDOM (SURVIVAL) - DC 12:</strong> To deduce that the stream which carved this path must have been diverted some time ago.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">NARROW PASSAGE</h4>
                        <p>The passage remains consistently low (about 4 feet high). Medium creatures moving through here must squeeze, halving their speed and having disadvantage on attack rolls and Dexterity saving throws. Attack rolls against them have advantage. The passage offers a way to circumvent the undead in area 12 (Smelter Cavern).</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area12">South tunnel to area 12</a></li>
                        <li><a href="#" class="area-link" data-area="area16">North tunnel to area 16</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>The stream flowing from area 10 (Dark Pool) to area 18 (Collapsed Cavern) used to continue through this low passage, eventually emptying out into area 16 (Booming Cavern). The dwarves diverted the stream into the channel leading to area 12 to drive the waterwheel in the smelter. Then the earthquakes that rocked Wave Echo Cave during the final spell battle of the orc invasion collapsed the floor in area 18, diverting the stream once again. The old streambed remains as a usable, albeit cramped, passage. Nezznar has not yet discovered this route.</p>
                </div>
            `
  },
  {
    id: "area18",
    name: "Area 18: Collapsed Cavern",
    content: `
                <div class="boxed-text">
                    <p>A wide, rubble-filled rift dominates the eastern half of this large cavern. A stream of water pours out of the west wall, tumbles down into the rift with a series of small cascades, and then flows out of sight to the north within the chasm. Several sturdy hemp ropes are secured to iron stakes hammered into the stone along the western edge of the rift, leading down to the chasm floor some twenty feet below. The air is damp, and the sound of the falling water echoes through the space. You see figures moving about: two hulking, hairy humanoids are clearing rock on the rift floor, while another stands guard near the western edge. A slender figure in dark robes, appearing to be a drow, supervises the operation from a slightly elevated position near the stream's entry point.</p>
                </div>

                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 13:</strong> To notice that the "drow" supervisor carries no obvious weapon but observes the work with keen, intelligent eyes, occasionally gesturing with subtle hand movements. The bugbears seem to respond to these gestures. The bugbear guard is alert and actively scanning the cavern entrances.</li>
                        <li><strong>INTELLIGENCE (NATURE) - DC 12 (if observing the bugbears):</strong> To recognize the large humanoids as Bugbears, known for their stealth and brutish strength, often serving as shock troops or guards for more cunning leaders.</li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements</h3>
                    <div class="element-block">
                        <h4 class="element-heading">CREATURES: NEZZNAR'S SERVANTS</h4>
                        <p>Three <strong>Bugbear Warriors</strong> (2024 MM) and a <strong>Doppelganger</strong> (2024 MM) named Vhalak (in the guise of a male drow) are present. Two Bugbear Warriors are on the rift floor clearing rubble. One Bugbear Warrior stands guard in the western half of the cavern. Vhalak supervises from near the stream.</p>
                        <div class="stat-block">
                            <h4>Bugbear Warrior (CR 1) - 3 present</h4>
                            <p><strong>AC:</strong> 14 (hide armor), <strong>HP:</strong> 33</p>
                            <p><strong>Attack (Morningstar):</strong> +4 to hit, 2d8+2 piercing. <strong>Grab:</strong> +4 to hit, 2d6+2 bludgeoning, target grappled (DC 12).</p>
                            <p><strong>Abduct:</strong> Bonus action, move speed with grappled Medium/Small creature.</p>
                            <p><strong>Key Features:</strong> Darkvision, Stealth +6, Surprise Attack (deals extra 2d6 damage on first turn of combat if it surprises a creature).</p>
                        </div>
                        <div class="stat-block mt-2">
                            <h4>Vhalak, Doppelganger (CR 3)</h4>
                            <p><strong>AC:</strong> 14, <strong>HP:</strong> 52</p>
                            <p><strong>Multiattack:</strong> Two Slam attacks and Unsettling Visage (if available).</p>
                            <p><strong>Slam:</strong> +6 to hit (Adv. on first round), 2d6+4 bludgeoning.</p>
                            <p><strong>Unsettling Visage (Recharge 6):</strong> DC 12 Wis save or Frightened 1 min (save ends). 15-ft emanation.</p>
                            <p><strong>Read Thoughts:</strong> Casts <em>Detect Thoughts</em> (DC 12 Cha save).</p>
                            <p><strong>Key Features:</strong> Shape-Shift (Medium/Small Humanoid), Immunity to Charmed.</p>
                        </div>
                        <p class="mt-2"><strong>Tactics:</strong> If a fight breaks out, the two Bugbear Warriors in the rift climb up the ropes (1 round action) to join. The guard Bugbear engages immediately. Vhalak uses Read Thoughts to assess threats and Unsettling Visage if pressed, relying on the Bugbears for protection. If two or more Bugbears are killed, Vhalak attempts to retreat to Area 19 to warn Nezznar, potentially using Shape-Shift to aid escape.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">RIFT</h4>
                        <p>The rift is 20 feet deep. The ropes allow ascent/descent without a check. Climbing the rough walls without a rope requires a DC 13 Strength (Athletics) check. Failure by 5+ means a fall (2d6 bludgeoning, prone).</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">TREASURE: GAUNTLETS OF OGRE POWER</h4>
                        <p>Nezznar's divinations are accurate. Buried under heavy rubble at the bottom of the rift is the crushed skeleton of a dwarf wearing <em>gauntlets of ogre power</em>. The remains are hidden from view but can be found with a successful DC 20 Wisdom (Perception) check while searching the rift floor. Each character searching can attempt one check per hour (or once per 10 minutes of dedicated searching, DM's discretion).</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Exits</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1">
                        <li><a href="#" class="area-link" data-area="area12">West channel to area 12</a></li>
                        <li><a href="#" class="area-link" data-area="area17">South channel to area 17</a></li>
                    </ul>
                </div>

                <div class="gm-notes">
                    <p>Nezznar's servants occupy this cavern, guarding against undead incursions from other parts of the mine and carefully sifting through the rubble based on the Black Spider's divinations about hidden treasure. Vhalak is one of Nezznar's more trusted lieutenants, primarily for its espionage capabilities.</p>
                </div>
            `
  },
  {
    id: "area19",
    name: "Area 19: The Drowned Queen's Ritual",
    content: `
                <div class="boxed-text">
                    <p>This vast, dark natural cavern echoes with the deep, rhythmic booming of distant waves. The 30-foot-high ceilings drip with massive stalactites, and the floor is slick with moisture. In the center of the cavern, where a magical font might once have stood, is now a horrifying centerpiece: a cage-like structure of blackened, coral-like material, writhing as if alive. This is the **Soul Cage**. Eerie green magical energy arcs from four large, dark obsidian crystals placed around it, lashing into the cage. Within its confines, faint, ghostly green forms—souls—swirl and writhe in silent torment. The air is cold and heavy with the scent of ozone and brine. The entire chamber is festooned with thick, sticky webs, obscuring vision and making movement difficult.</p>
                </div>
                <div class="mb-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Initial Observations</h3>
                    <ul class="list-disc list-inside text-secondary-text space-y-1 reactive-checks">
                        <li><strong>WISDOM (PERCEPTION) - DC 14:</strong> To spot a slender, dark-robed figure (Nezzar) perched atop a high stalagmite near one of the inactive crystals, chanting and gesturing as if conducting the ritual. The glint of multiple red eyes can be seen from shadowy crevices and within the webs.</li>
                        <li><strong>INTELLIGENCE (ARCANA or RELIGION) - DC 15:</strong> To recognize the setup as a profane ritual combining necromancy (the Soul Cage) with elemental power (the booming waves and brine-scented air). The crystals are clearly channeling energy *into* the central cage, not drawing it out. A successful check suggests the ritual's goal is to corrupt or sacrifice the souls to a powerful, dark entity, likely Lolth, using the site's connection to a chaotic elemental force like Umberlee as a power source.</li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-accent mb-2">Room Elements & Hazards</h3>
                    <div class="element-block">
                        <h4 class="element-heading">ENVIRONMENTAL FACTORS</h4>
                        <ul class="list-disc list-inside text-secondary-text space-y-1 mt-2">
                            <li><strong>Booming Waves:</strong> Every 2 minutes (10 rounds), a deep tremor shakes the cavern as a wave crashes somewhere deep below. Creatures in precarious positions (climbing, near ledges) must make a DC 12 Dexterity saving throw or fall prone. The tremors seem to intensify as the ritual progresses (i.e., as more crystals are activated).</li>
                            <li><strong>Soul Cage (Ritual Focus):</strong> Touching the cage deals 3d6 cold damage and 3d6 necrotic damage. Additionally, a creature starting its turn within 5 feet of the Soul Cage must succeed on a DC 13 Wisdom saving throw or have disadvantage on attack rolls and saving throws until the start of its next turn, as ghostly tendrils lash out to sap its will.</li>
                            <li><strong>Unstable Magic:</strong> At the end of each round, roll a d6. On a 1, a pulse of raw energy erupts from a random active Focusing Crystal (or the Soul Cage itself if no crystals are active). Creatures within 10 ft of the source make a DC 13 Dex save, taking 2d6 force damage (half on success). Anyone concentrating damaged by this makes an additional DC 10 Con save. If a pulse originates from a crystal, it deactivates.</li>
                            <li><strong>Webs:</strong> Difficult terrain. Heavily webbed areas are lightly obscured. AC 10, HP 10 (thicker sections), vulnerability to fire damage.</li>
                        </ul>
                    </div>
                    <div class="element-block">
                         <h4 class="element-heading">THE UNSTABLE RITUAL (MECHANIC)</h4>
                         <p>Players must deactivate crystals to weaken Nezzar's Phase 2 transformation. Two of the four crystals are active at the start of the encounter.</p>
                         <ul class="list-disc list-inside text-secondary-text space-y-1 mt-2">
                             <li><strong>Crystal Properties:</strong> AC 13, HP 25. Immunity: poison, psychic. Resistance: nonmagical bludgeoning, piercing, slashing.</li>
                             <li><strong>Deactivating an Active Crystal:</strong>
                                 <ul class="list-disc list-inside ml-4">
                                     <li><strong>Attack:</strong> Destroy it (deals 25 damage).</li>
                                     <li><strong>Disrupt (Arcana):</strong> Action, adjacent, DC 15 Intelligence (Arcana) check.</li>
                                     <li><strong>Unlock Cage (Thieves' Tools):</strong> Action, adjacent, DC 15 Dexterity (Thieves' Tools) check.</li>
                                     <li><strong>Dispel Magic:</strong> DC 15 spellcasting ability check.</li>
                                     <li><strong>Unstable Magic Pulse:</strong> If a pulse originates from a crystal, it deactivates.</li>
                                 </ul>
                             </li>
                             <li>Nezzar can use her Action to reactivate a disrupted/sabotaged/pulsed crystal.</li>
                         </ul>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">PHASE 1: NEZZAR'S CUNNING</h4>
                        <p><strong>Goal:</strong> Nezzar attempts to activate the remaining two Focusing Crystals to complete the ritual while her minions engage the party.</p>
                        <div class="stat-block">
                            <h4>Nezzar, The Black Spider (Phase 1, CR 5)</h4>
                            <p><strong>AC:</strong> 12 (15 with Mage Armor), <strong>HP:</strong> 90 (12d8 + 36)</p>
                            <p><strong>Saves:</strong> Con +6, Int +6, Wis +4; <strong>Skills:</strong> Arcana +6, Deception +4, Perception +4, Stealth +5</p>
                            <p><strong>Spider Staff:</strong> 10 charges (Spider Climb, Web DC 15).</p>
                            <p><strong>Spellcasting (DC 14, +6 to hit):</strong> At Will: Dancing Lights, Mage Armor, Ray of Frost (3d6 cold, speed -10ft). 3/Day: Magic Missile, Shield. 2/Day: Web. 1/Day: Darkness, Faerie Fire, Invisibility, Levitate, Suggestion.</p>
                            <p><strong>Action:</strong> Activate Crystal (Requires Concentration on Ritual).</p>
                        </div>
                        <p class="mt-2"><strong>Minions (Phase 1):</strong></p>
                        <ul class="list-disc list-inside text-secondary-text space-y-1">
                            <li>1x <strong>Phase Spider</strong> (CR 3, HP 45, AC 14)</li>
                            <li>2x <strong>Giant Spiders</strong> (CR 1, HP 26, AC 14)</li>
                            <li>1x <strong>Swarm of Spiders</strong> (CR 1/2, HP 22, AC 12)</li>
                        </ul>
                        <p class="mt-2"><strong>Tactics (Phase 1):</strong> Nezzar prioritizes activating crystals, using spells and minions for defense and control. She will use her minions to protect the active crystals and herself, using Web and Darkness to control the battlefield. Phase Spider targets casters/rogues. Giant Spiders engage melee. Swarm disrupts casters.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">TRIGGERING PHASE 2: THE DROWNED QUEEN'S WRATH</h4>
                        <p>When Nezzar (Phase 1) drops to 0 HP, she screams an invocation to Lolth. Her Spider Staff shatters, drawing power from the **Soul Cage** and any active Focusing Crystals. Her form twists as dark, spectral green energy envelops her. Chitinous plates, slick with salt water, erupt from her skin and her lower body swells into a monstrous spider form. A terrifying shriek echoes as she rises, empowered by the tormented souls.</p>
                    </div>
                    <div class="element-block">
                        <h4 class="element-heading">PHASE 2: THE UNLEASHED FURY</h4>
                        <div class="stat-block">
                            <h4>Nezzar Transformed (Base CR 7, up to CR 11)</h4>
                            <p><strong>AC:</strong> 18 (Natural), <strong>HP:</strong> 152 (Base, +Temp HP from crystals)</p>
                            <p><strong>Speed:</strong> 30 ft., Climb 30 ft.</p>
                            <p><strong>Saves:</strong> Dex +7, Con +7, Wis +5</p>
                            <p><strong>Actions:</strong> Multiattack (1 Bite, 2 Claws).</p>
                            <p><strong>Bite:</strong> +7 to hit, 1d10+4 piercing + 3d8 poison (base, increases with crystals).</p>
                            <p><strong>Claws:</strong> +7 to hit, 2d6+4 slashing.</p>
                            <p><strong>Web Spit (Recharge 5-6):</strong> +7 to hit, range 30/60 ft., target Restrained (DC 14 Str escape).</p>
                            <p><strong>Innate Spellcasting (DC 14):</strong> At Will: Dancing Lights. 1/Day: Darkness, Faerie Fire.</p>
                        </div>
                        <p class="mt-2"><strong>Soul Cage Attunement Crystal Effects (Phase 2 Modifiers):</strong></p>
                        <table class="w-full text-sm text-left text-gray-500 mt-2">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-2 py-1">Active Crystals</th>
                                    <th scope="col" class="px-2 py-1">Temp HP</th>
                                    <th scope="col" class="px-2 py-1">Poison Dmg (Total)</th>
                                    <th scope="col" class="px-2 py-1">New Abilities</th>
                                    <th scope="col" class="px-2 py-1">Est. CR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <td class="px-2 py-1">0</td>
                                    <td class="px-2 py-1">+0</td>
                                    <td class="px-2 py-1">3d8</td>
                                    <td class="px-2 py-1">Base</td>
                                    <td class="px-2 py-1">7</td>
                                </tr>
                                <tr class="bg-gray-50 border-b">
                                    <td class="px-2 py-1">1</td>
                                    <td class="px-2 py-1">+30</td>
                                    <td class="px-2 py-1">3d8</td>
                                    <td class="px-2 py-1">—</td>
                                    <td class="px-2 py-1">8</td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <td class="px-2 py-1">2</td>
                                    <td class="px-2 py-1">+60</td>
                                    <td class="px-2 py-1">4d8</td>
                                    <td class="px-2 py-1">—</td>
                                    <td class="px-2 py-1">9</td>
                                </tr>
                                <tr class="bg-gray-50 border-b">
                                    <td class="px-2 py-1">3</td>
                                    <td class="px-2 py-1">+90</td>
                                    <td class="px-2 py-1">5d8</td>
                                    <td class="px-2 py-1">Reaction: Drowning Grasp (replaces Web Snare)</td>
                                    <td class="px-2 py-1">10</td>
                                </tr>
                                <tr class="bg-white">
                                    <td class="px-2 py-1">4</td>
                                    <td class="px-2 py-1">+120</td>
                                    <td class="px-2 py-1">6d8</td>
                                    <td class="px-2 py-1">Reaction: Drowning Grasp, Legendary Resistance (1/Day)</td>
                                    <td class="px-2 py-1">11</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="mt-2"><strong>Tactics (Phase 2):</strong> Aggressive, uses mobility, Multiattack standard. Darkness if heavily damaged, Faerie Fire on elusive targets. Uses gained reactions.</p>
                        <p class="mt-2"><strong>Drowning Grasp (Replaces Web Snare Reaction):</strong> When a creature misses Nezzar with a melee attack, Nezzar can force it to make a DC 14 Strength saving throw. On a failure, the target is restrained by spectral, grasping tendrils of cold, green energy until the end of its next turn.</p>
                    </div>
                </div>
                <div class="gm-notes">
                    <p>This is the climax of the adventure. Nezznar, in a pact with a dark aspect of Lolth, is using the cave's natural connection to a powerful water source (a link to Umberlee's domain) to fuel a profane ritual. She is sacrificing the souls of the miners who died here, trapped within the Soul Cage, to gain a powerful boon and transform into a mightier form. The crystals amplify and channel the energy. The transformation is her ultimate goal. Emphasize the dynamic environment and the stakes. Adapt difficulty based on party performance and remaining resources.</p>
                </div>
            `
  }

];
