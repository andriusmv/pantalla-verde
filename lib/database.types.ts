export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      course: {
        Row: {
          contenido_subtitle: string | null
          contenido_titulo: string | null
          content_pdf: string | null
          created_at: string | null
          description: string | null
          embed: string | null
          estado: boolean | null
          id: string
          subtitle: string
          thumbnail: string | null
          title: string | null
          video_ad: string | null
        }
        Insert: {
          contenido_subtitle?: string | null
          contenido_titulo?: string | null
          content_pdf?: string | null
          created_at?: string | null
          description?: string | null
          embed?: string | null
          estado?: boolean | null
          id: string
          subtitle: string
          thumbnail?: string | null
          title?: string | null
          video_ad?: string | null
        }
        Update: {
          contenido_subtitle?: string | null
          contenido_titulo?: string | null
          content_pdf?: string | null
          created_at?: string | null
          description?: string | null
          embed?: string | null
          estado?: boolean | null
          id?: string
          subtitle?: string
          thumbnail?: string | null
          title?: string | null
          video_ad?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
          subscription_status?:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
          subscription_status?:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      module: {
        Row: {
          course_id: string | null
          created_at: string | null
          description: string | null
          duration: string | null
          file: string | null
          id: string
          order: number | null
          subtitle: string | null
          thumbnail: string | null
          tipo: string | null
          title: string | null
          video_url: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          duration?: string | null
          file?: string | null
          id: string
          order?: number | null
          subtitle?: string | null
          thumbnail?: string | null
          tipo?: string | null
          title?: string | null
          video_url?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          duration?: string | null
          file?: string | null
          id?: string
          order?: number | null
          subtitle?: string | null
          thumbnail?: string | null
          tipo?: string | null
          title?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      organization: {
        Row: {
          access: boolean | null
          avatar_url: string | null
          created_at: string | null
          id: string
          plan_id: number | null
          plan_name: string | null
          recieve_newsletter: boolean | null
          seats: number | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
        }
        Insert: {
          access?: boolean | null
          avatar_url?: string | null
          created_at?: string | null
          id: string
          plan_id?: number | null
          plan_name?: string | null
          recieve_newsletter?: boolean | null
          seats?: number | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
        }
        Update: {
          access?: boolean | null
          avatar_url?: string | null
          created_at?: string | null
          id?: string
          plan_id?: number | null
          plan_name?: string | null
          recieve_newsletter?: boolean | null
          seats?: number | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_plan_id_fkey"
            columns: ["plan_id"]
            referencedRelation: "plans"
            referencedColumns: ["id"]
          }
        ]
      }
      plans: {
        Row: {
          created_at: string | null
          features: string | null
          id: number
          name: string | null
          quantity: number | null
          subscription_id: string | null
        }
        Insert: {
          created_at?: string | null
          features?: string | null
          id?: number
          name?: string | null
          quantity?: number | null
          subscription_id?: string | null
        }
        Update: {
          created_at?: string | null
          features?: string | null
          id?: number
          name?: string | null
          quantity?: number | null
          subscription_id?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          product_name: string | null
          quantity: number
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          product_name?: string | null
          quantity: number
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          product_name?: string | null
          quantity?: number
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      toursvirtuales: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          title: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      tutorial: {
        Row: {
          created_at: string | null
          description: string | null
          duration: string | null
          embed: string | null
          id: string
          tag: string | null
          title: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration?: string | null
          embed?: string | null
          id: string
          tag?: string | null
          title?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration?: string | null
          embed?: string | null
          id?: string
          tag?: string | null
          title?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          email: string | null
          full_name: string | null
          id: string
          organization_id: string | null
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          email?: string | null
          full_name?: string | null
          id: string
          organization_id?: string | null
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          email?: string | null
          full_name?: string | null
          id?: string
          organization_id?: string | null
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_email_fkey"
            columns: ["email"]
            referencedRelation: "users"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_organization_id_fkey"
            columns: ["organization_id"]
            referencedRelation: "organization"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
    }
    Enums: {
      enum_type: "day" | "week" | "month" | "year" | "one_time"
      one_time: "day" | "week" | "month" | "year" | "one_time"
      pricing_plan_interval: "day" | "week" | "month" | "year" | "one_time"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
