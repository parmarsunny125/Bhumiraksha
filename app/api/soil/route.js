import db from '@/lib/db'
import React, { use } from 'react'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const data = await req.json()
    console.log(data['loc'])
    const [soilResults, soilFields] = await db.query(
        'SELECT crop AS result FROM ( SELECT crop  FROM location     WHERE district LIKE ?    UNION ALL SELECT Name AS crop FROM soil WHERE soilType LIKE ? AND ? <= phHigh AND ?>=phLow AND ?>= Nlow AND ?<= Nhigh  AND ?>= Plow AND ?<= Phigh AND ?>= Klow AND ?<= Khigh   AND ?>= Calow AND ?<= Cahigh   AND ?>= Mglow AND ?<= Mghigh  AND ?>= Slow AND ?<= Shigh) AS combined_results',
        [
            `${data['loc']}%`,
            data['soilType'],
            data['pH'],
            data['pH'],
            data['N'],
            data['N'],
            data['P'],
            data['P'],
            data['K'],
            data['K'],
            data['Ca'],
            data['Ca'],
            data['Mg'],
            data['Mg'],
            data['S'],
            data['S']
        ]
    )
    // const [locationResults, locationFields] = await db.query(
    //     'SELECT crop from location WHERE district LIKE ? ',
    //     [data['loc'].substring(1, data['loc'].length - 1)]
    // )
    // console.log(locationResults, locationFields)
    console.log(soilFields)
    console.log(soilResults)
    return NextResponse.json({ soilResults })
    // res.json({ soilResults })
    // return JSON.stringify(soilResults)
}

// AND ?>= Nlow AND ?<= Nhigh AND ?>= Plow AND ?<= Phigh AND ?>= Klow AND ?<= Khigh AND ?>= Calow AND ?<= Cahigh AND ?>= Mglow AND ?<= Mghigh AND ?>= Slow AND ?<= Shigh

// 'SELECT Name FROM soil WHERE soilType like ? AND ?<=phHigh AND ?>=phLow AND ?>= Nlow AND ?<= Nhigh AND ?>= Plow AND ?<= Phigh AND ?>= Klow AND ?<= Khigh AND ?>= Calow AND ?<= Cahigh AND ?>= Mglow AND ?<= Mghigh AND ?>= Slow AND ?<= Shigh',
// ;[
//     data['soilType'],
//     data['pH'],
//     data['pH'],
//     data['N'],
//     data['N'],
//     data['P'],
//     data['P'],
//     data['K'],
//     data['K'],
//     data['Ca'],
//     data['Ca'],
//     data['Mg'],
//     data['Mg'],
//     data['S'],
//     data['S']
// ]
