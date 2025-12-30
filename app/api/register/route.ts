import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const registrationSchema = z.object({
  fullName: z.string().min(2),
  gotra: z.string().min(1),
  mobile: z.string().regex(/^\d{10}$/),
  email: z.string().email(),
  numParticipants: z.number().min(1),
  participationMode: z.enum(['in-person', 'online', 'seva']),
  yajnaOptions: z.string().optional(),
  wantsPrasadam: z.boolean(),
  prasadamAddress: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = registrationSchema.parse(body);
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert([
        {
          full_name: validatedData.fullName,
          gotra: validatedData.gotra,
          mobile: validatedData.mobile,
          email: validatedData.email,
          num_participants: validatedData.numParticipants,
          participation_mode: validatedData.participationMode,
          yajna_options: validatedData.yajnaOptions,
          wants_prasadam: validatedData.wantsPrasadam,
          prasadam_address: validatedData.prasadamAddress,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save registration' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      registrationId: data.id,
    });
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data provided', details: error.issues },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}
