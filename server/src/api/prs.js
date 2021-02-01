/* eslint-disable */
const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGO_URI);
const users = db.get('users');

const schema = Joi.object({
    name: Joi.string().trim().required(),
    workouts: Joi.object({
        arms: Joi.object({
            biceps: Joi.object({
                dumbbellCurl: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                barCurl: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                isolatedBarCurl: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                hammerCurl: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                ropeCableCurl: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                barCableCurl: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
            }).required(),
            triceps: Joi.object({
                tricepKickback: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                skullCrushers: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                closeGripBenchpress: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                tricepPushDown: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
                tricepPullDown: Joi.object({
                    weight: Joi.string().trim().required(),
                    reps: Joi.string().trim().required(),
                    sets: Joi.string().trim().required(),
                    name: Joi.string().trim().required()
                }).required(),
            })
        }).required(),
        chest: Joi.object({
            benchpress: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            dumbbellBenchpress: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            dumbbellFly: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            cableFly: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            pushups: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required()
        }).required(),
        back: Joi.object({
            deadlift: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            shrugs: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            latPulldown: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            rackPull: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            landmine: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            oneArmBentOverRow: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            cableRow: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
        }).required(),
        shoulders: Joi.object({
            barbellShoulderPress: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            dumbbellShoulderPress: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            jammer: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            dumbbellFrontRaise: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            lateralRaise: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            rearDeltRaise: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            behindTheNeckPress: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            facePull: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
        }),
        legs: Joi.object({
            squat: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            legExtension: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            legCurl: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            romanianDeadlift: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            straightLegDeadlift: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            calfRaise: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            hipThrust: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
        }),
        abs: Joi.object({
            situps: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
            sideBend: Joi.object({
                weight: Joi.string().trim().required(),
                reps: Joi.string().trim().required(),
                sets: Joi.string().trim().required(),
                name: Joi.string().trim().required()
            }).required(),
        })
        
    })
});

const router = express.Router(); 

// READ All
router.get('/', async (req, res, next) => {
   try {
       const items = await users.find({});
       res.json(items);
   } catch (error) {
       next(error);
   }
});

// READ One
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await users.findOne({
            _id: id,
        });
        if (!item) return next();
        return res.json(item);
    } catch (error) {
        next(error);
    }
});

// Create One
router.post('/', async (req, res, next) => {
    try {
        // console.log(req.body);
        const value = await schema.validateAsync(req.body);
        const inserted = await users.insert(value);
        res.json(inserted);
    } catch (error) {
        next(error);
    }
});

// Update One
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(req.body);
        const value = await schema.validateAsync(req.body);
        const item = await users.findOne({
            _id: id,
        });
        if (!item) return next();
        await users.update({
         _id: id,   
        }, {
            $set: value,
        });
        res.json(value);
    } catch (error) {
        next(error);
    }
});

// Delete One
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await users.remove({ _id: id });
        res.status(200).send('Success!');
    } catch (error) {
        next(error);
    }
});

module.exports = router;